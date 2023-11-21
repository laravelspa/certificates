<script setup>
import { onMounted, reactive, toRefs } from "vue";
import vueFilePond, { setOptions } from "vue-filepond";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

const props = defineProps({
    object: {
        type: Object,
        required: true,
    },
    namespace: {
        type: String,
        required: true,
    },
    keyOfImages: {
        type: String,
        required: true,
    },
    maxFiles: {
        type: Number,
        required: false,
        default: () => 1,
    },
    allowMultiple: {
        typr: Boolean,
        default: false,
    },
    instantUpload: {
        typr: Boolean,
        default: true,
    },
    allowReorder: {
        typr: Boolean,
        default: false,
    },
});

const {
    object,
    namespace,
    keyOfImages,
    maxFiles,
    allowMultiple,
    instantUpload,
    allowReorder,
} = toRefs(props);

const server = reactive({
    url: "/api/uploads",
    restore: (source, load) => {
        fetch(source).then((res) => res.blob().then((myBlob) => load(myBlob)));
    },
});

const myFiles = reactive([]);

const route = useRoute();
const store = useStore();

const handleFilePondInit = () => {
    setOptions({
        server: {
            process: async (
                fieldName,
                file,
                metadata,
                load,
                error,
                progress,
                abort,
                transfer,
                options
            ) => {
                const formData = new FormData();
                formData.append("image", file, file.name);
                formData.append("folder", keyOfImages.value);

                await store.dispatch("upload/upload", formData);

                let fileUploaded = await store.state.upload.file;

                load(fileUploaded.filename);

                if (allowMultiple.value) {
                    object.value[keyOfImages.value].push(fileUploaded);
                } else {
                    object.value[keyOfImages.value] = fileUploaded;
                }
            },
            revert: (uniqueFileId, load, error) => {
                if (allowMultiple.value) {
                    object.value[keyOfImages.value].shift(uniqueFileId);
                } else {
                    object.value[keyOfImages.value].value = { url: "" };
                }

                if (
                    [undefined].includes(object.value[keyOfImages.value].fake)
                ) {
                    let deletedImage = myFiles.find(
                        (file) => file.source === uniqueFileId
                    );
                    store.dispatch("upload/destroy", {
                        collection: keyOfImages.value,
                        filename: uniqueFileId,
                        // modelId: object.value.id,
                        module: namespace.value,
                        id: deletedImage?.file.uuid,
                    });
                }

                error("oh my goodness");
                load();
            },
        },
    });
};

const loadImages = async () => {
    if (object.value) {
        if (
            route.params.id ||
            ["settings.system", "profile"].includes(route.name)
        ) {
            if (allowMultiple.value) {
                object.value[keyOfImages.value].forEach((image) => {
                    myFiles.push({
                        source: image.original_url,
                        options: {
                            type: "limbo",
                        },
                        file: {
                            uuid: image.uuid,
                            name: image.filename,
                            size: image.size,
                            type: image.mime_type,
                            order_column: image.order_column,
                        },
                    });
                });
            } else {
                if (object.value) {
                    myFiles.push({
                        source: object.value[keyOfImages.value]?.original_url,
                        options: {
                            type: "limbo",
                        },
                        file: {
                            uuid: object.value[keyOfImages.value]?.uuid,
                            name: object.value[keyOfImages.value]?.filename,
                            size: object.value[keyOfImages.value]?.size,
                            type: object.value[keyOfImages.value]?.mime_type,
                        },
                    });
                }
            }
        } else {
            object.value[keyOfImages.value] = [];
        }
    }
};

const reorderFiles = async (files) => {
    let order = 1;
    files.forEach((file) => {
        let img = object.value[keyOfImages.value].find(
            (image) => image.filename === file.filename
        );
        img.order_column = order++;
    });
    await store.dispatch("upload/reorder", object.value[keyOfImages.value]);
};

await loadImages();
</script>

<template>
    <file-pond
        ref="pond"
        :label-idle="$t('choose_your_image')"
        accepted-file-types="image/jpeg, image/png"
        :files="myFiles"
        :allow-multiple="allowMultiple"
        :instantUpload="instantUpload"
        :allowReorder="allowReorder"
        :dropValidation="true"
        :dropOnPage="true"
        :server="server"
        @init="handleFilePondInit"
        @reorderfiles="reorderFiles"
        credits="false"
        imagePreviewHeight="100%"
        :maxFiles="maxFiles"
    />
</template>

<style scopped>
.filepond--panel-root {
    background-color: var(--q-primary);
}
.filepond--drop-label {
    color: #fff;
}

.filepond--image-preview-overlay svg {
    display: none;
}

[data-filepond-item-state="processing-complete"] .filepond--item-panel {
    background-color: var(--q-primary);
}
</style>
