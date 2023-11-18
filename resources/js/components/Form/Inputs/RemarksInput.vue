<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();

const customToolbar = [
    [
        {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: "only-icons",
            options: ["left", "center", "right", "justify"],
        },
    ],
    ["bold", "italic", "strike", "underline", "subscript", "superscript"],
    ["token", "hr", "link", "custom_btn"],
    ["fullscreen"],
    [
        {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"],
        }
    ],
    ["quote", "unordered", "ordered", "outdent", "indent"],
    ["undo", "redo"],
    ["viewsource"],
];
defineProps({
    inputModel: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <q-editor
        :modelValue="inputModel"
        @update:modelValue="(value) => (inputModel = value)"
        flat
        toolbar-text-color="white"
        toolbar-toggle-color="yellow-8"
        toolbar-bg="primary"
        :dense="$q.screen.lt.md"
        :toolbar="customToolbar"
        />
        <!-- dark -->
        <!-- content-class="bg-dark" -->
</template>