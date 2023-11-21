<script setup>
import { Notify } from "quasar";
import { ref, computed, toRefs, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useExportTableCsv } from "../../composables/csv";
import { useTable } from "../../composables/table";
import { useVisibleColumns } from "../../composables/visibleColumns";
import { BaseInput, BaseBtn, DialogConfirm, VisibleColumns } from "../import";

const props = defineProps({
    config: {
        type: Object,
        required: true,
        default: () => {},
    },
    columns: {
        type: Array,
        required: true,
        default: () => [],
    },
});

const store = useStore();
const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const { config, columns } = toRefs(props);
const {
    moduleName,
    getItems,
    fetchItems,
    bulkDestroyItems,
    destroyItem,
    options,
} = config.value;
const { visibleColumns } = useVisibleColumns(columns.value);
const selected = ref([]);
const search = ref(route.query.search);
const dialogConfirm = ref(false);

const loading = computed(() => store.getters["getLoading"], { root: true });

const rows = computed(() => store.getters[`${moduleName}/${getItems}`]);
const { exportTableCsv } = useExportTableCsv(
    moduleName,
    columns,
    rows,
    visibleColumns
);

const pagination = computed(() => store.getters[`${moduleName}/getPagination`]);

const onRequest = async (props) => {
    const { handleRequest, loading } = useTable(
        props,
        moduleName,
        fetchItems,
        store
    );
    handleRequest();
};

watch(
    search,
    (val) => {
        router.replace({ query: { search: val } });
        onRequest({
            pagination: pagination.value,
            filter: val,
        });
    },
    { immediate: true }
);

const getSelectedString = () => {
    return selected.value.length === 0
        ? ""
        : t("table.selected_records_label", {
              length: selected.value.length,
              rows: rows.value.length,
          });
};

const editItem = (id) => {
    router.push({ name: `${moduleName}.edit`, params: { id } });
};
const deletedMessage = ref("");
const deletedItemId = ref(null);

const confirmDelete = (id) => {
    deletedMessage.value = t("messages.delete_confirm");
    deletedItemId.value = id;
    dialogConfirm.value = true;
};

const deletedItemIds = ref([]);
const confirmBulkDelete = () => {
    if (!selected.value.length) {
        Notify.create({
            progress: true,
            type: "negative",
            message: t("messages.delete_no_selected"),
        });
        return;
    }
    deletedMessage.value = t("messages.bulk_delete_confirm");
    deletedItemIds.value = selected.value.map((item) => item.id);
    dialogConfirm.value = true;
};

const deleteItem = async () => {
    if (deletedItemIds.value.length) {
        await store.dispatch(`${moduleName}/${bulkDestroyItems}`, {
            ids: deletedItemIds.value,
        });
    }
    if (deletedItemId.value !== null) {
        await store.dispatch(
            `${moduleName}/${destroyItem}`,
            deletedItemId.value
        );
    }
    deletedItemId.value = null;
    deletedItemIds.value = [];
    selected.value = [];
    // Refresh Table With New Get Items Request
    onRequest({
        pagination: pagination.value,
        filter: search.value,
    });
};

const toggleView = ref("table");

const clearDeletArray = () => {
    selected.value = [];
    deletedItemId.value = null;
    deletedItemIds.value = [];
};

const exportPDF = async (id) => {
    await store.dispatch(`${moduleName}/exportPdf`, id);
    // router.push({ name: `${moduleName}.pdf`, params: { id } });
};
</script>
<template>
    <q-table
        :grid="toggleView === 'grid'"
        class="q-py-md"
        :title="t(`links.${config.moduleName}`, 2)"
        :rows-per-page-options="[10, 25, 50]"
        :rows="rows"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        @request="onRequest"
        binary-state-sort
        dense
        separator="none"
        :visible-columns="visibleColumns"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
        :no-data-label="t('table.no_data_label')"
        :no-results-label="t('table.no_results_label')"
        :filter="search"
        flat
        bordered
    >
        <template v-slot:no-data="{ icon, message, filter }">
            <div class="full-width row flex-center text-accent q-gutter-sm">
                <q-icon size="2em" name="sentiment_dissatisfied" />
                <span> {{ message }} </span>
                <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
            </div>
        </template>
        <template v-slot:top="props">
            <div
                class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-table__title row"
                :class="$q.screen.gt.sm ? 'justify-between' : 'justify-center'"
            >
                {{ t(`links.${config.moduleName}`, 2) }}
            </div>

            <div
                class="col-lg-10 col-md-10 col-sm-12 col-xs-12 flex items-center"
                :class="$q.screen.gt.sm ? 'justify-between' : 'justify-center'"
            >
                <div class="q-gutter-y-md col-auto q-mb-md">
                    <q-tabs
                        v-model="toggleView"
                        dense
                        narrow-indicator
                        align="justify"
                    >
                        <q-tab name="table" icon="table_rows" />
                        <q-tab name="grid" icon="grid_view" />
                    </q-tabs>
                </div>

                <div class="col-auto q-mb-md">
                    <BaseBtn
                        glossy
                        round
                        color="info"
                        icon="file_upload"
                        class="q-ml-md"
                        :toolbar="t('table.import_csv')"
                        :to="{ name: `${moduleName}.import` }"
                        v-if="options.import"
                        v-permission="[`import-file-${moduleName}`]"
                    />
                    <BaseBtn
                        glossy
                        round
                        color="accent"
                        icon="file_download"
                        class="q-ml-md"
                        :toolbar="t('table.download_csv')"
                        @click="exportTableCsv"
                        v-if="options.export"
                        v-permission="[`export-file-${moduleName}`]"
                    />

                    <BaseBtn
                        glossy
                        round
                        icon="delete_outline"
                        color="negative"
                        class="q-ml-md"
                        :toolbar="t('table.bulk_delete')"
                        @click="() => confirmBulkDelete()"
                        v-permission="[
                            `bulk-delete-${moduleName}`,
                            `bulk-delete-${moduleName}`,
                        ]"
                    />

                    <BaseBtn
                        glossy
                        round
                        dark
                        icon="add"
                        color="primary"
                        class="q-ml-md"
                        :toolbar="t('table.new_record')"
                        :to="{ name: `${moduleName}.create` }"
                        v-permission="[`create-${moduleName}`]"
                    />
                    <BaseBtn
                        dark
                        color="info"
                        class="q-ml-md"
                        :icon="
                            props.inFullscreen
                                ? 'fullscreen_exit'
                                : 'fullscreen'
                        "
                        @click="props.toggleFullscreen"
                        :toolbar="t('table.fullscreen')"
                    />
                </div>

                <div class="col-auto q-mb-md row justify-center">
                    <BaseInput
                        v-model="search"
                        debounce="300"
                        :placeholder="t('global.search')"
                        class="q-ml-md"
                        append="search"
                        hide-hint
                        dense
                        :label="t('inputs.search')"
                        :bottom-slots="false"
                    />
                    <VisibleColumns
                        v-model="visibleColumns"
                        :columns="columns"
                    />
                </div>
            </div>
        </template>

        <template v-slot:item="props">
            <div
                class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                :style="props.selected ? 'transform: scale(0.95);' : ''"
            >
                <q-card>
                    <q-card-section>
                        <q-checkbox
                            dense
                            v-model="props.selected"
                            :label="props.row.name"
                        ></q-checkbox>
                    </q-card-section>
                    <q-separator></q-separator>
                    <q-list dense>
                        <q-item
                            v-for="col in props.cols.filter(
                                (col) => col.name !== 'remarks'
                            )"
                            :key="col.name"
                        >
                            <template
                                v-if="
                                    ![
                                        'actions',
                                        'avatar',
                                        'logo',
                                        'icon',
                                        'active_image',
                                        'featured',
                                    ].includes(col.name)
                                "
                            >
                                <q-item-section>
                                    <q-item-label>{{ col.label }}</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{
                                        col.value
                                    }}</q-item-label>
                                </q-item-section>
                            </template>
                            <template
                                v-else-if="
                                    [
                                        'avatar',
                                        'logo',
                                        'icon',
                                        'active_image',
                                        'featured',
                                    ].includes(col.name)
                                "
                            >
                                <q-item-section>
                                    <q-item-label>{{ col.label }}</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>
                                        <q-td>
                                            <q-avatar size="md">
                                                <img :src="col.value" />
                                            </q-avatar>
                                        </q-td>
                                    </q-item-label>
                                </q-item-section>
                            </template>
                            <q-item-section v-else>
                                <div class="row justify-center">
                                    <BaseBtn
                                        glossy
                                        round
                                        color="positive"
                                        icon="edit"
                                        class="q-mr-md"
                                        :toolbar="t('table.edit_record')"
                                        @click="editItem(props.row.id)"
                                        v-permission="[`edit-${moduleName}`]"
                                    />
                                    <BaseBtn
                                        glossy
                                        round
                                        icon="delete"
                                        color="negative"
                                        :toolbar="t('table.delete_record')"
                                        @click="confirmDelete(props.row.id)"
                                        v-permission="[`delete-${moduleName}`]"
                                    />
                                </div>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card>
            </div>
        </template>
        <template v-slot:body-cell-avatar="props">
            <q-td :props="props">
                <q-avatar size="md">
                    <img :src="props.value" />
                </q-avatar>
            </q-td>
        </template>
        <template v-slot:body-cell-logo="props">
            <q-td :props="props">
                <q-avatar size="md">
                    <img :src="props.value" />
                </q-avatar>
            </q-td>
        </template>
        <template v-slot:body-cell-featured="props">
            <q-td :props="props">
                <q-avatar size="md">
                    <img :src="props.value" />
                </q-avatar>
            </q-td>
        </template>
        <template v-slot:body-cell-icon="props">
            <q-td :props="props">
                <q-avatar size="md">
                    <img :src="props.value" />
                </q-avatar>
            </q-td>
        </template>
        <template v-slot:body-cell-active_image="props">
            <q-td :props="props">
                <q-avatar size="md">
                    <img :src="props.value" />
                </q-avatar>
            </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
            <q-td :props="props">
                <BaseBtn
                    glossy
                    round
                    color="positive"
                    icon="edit"
                    class="q-ml-md"
                    :toolbar="t('table.edit_record')"
                    @click="editItem(props.value)"
                    v-permission="[`edit-${moduleName}`]"
                />
                <BaseBtn
                    glossy
                    round
                    icon="delete"
                    color="negative"
                    :toolbar="t('table.delete_record')"
                    @click="confirmDelete(props.value)"
                    v-permission="[`delete-${moduleName}`]"
                />

                <BaseBtn
                    glossy
                    round
                    icon="picture_as_pdf"
                    color="secondary"
                    :toolbar="t('table.pdf_record')"
                    @click="exportPDF(props.value)"
                    v-if="options.pdf"
                />
            </q-td>
        </template>
    </q-table>
    <Suspense>
        <template #default>
            <DialogConfirm
                @close-confirm="clearDeletArray"
                v-model="dialogConfirm"
                v-if="dialogConfirm"
            >
                {{ deletedMessage }}
                <template #action>
                    <BaseBtn
                        :toolbar="t('action.delete')"
                        @click="() => deleteItem()"
                        icon="check"
                        color="negative"
                        v-close-popup
                        size="md"
                    />
                </template>
            </DialogConfirm>
        </template>
        <template #fallback>
            <div class="fixed-center">
                <q-spinner-pie color="primary" size="10em" />
            </div>
        </template>
    </Suspense>
</template>

<style scoped>
.grid-style-transition {
    transition: transform 0.28s, background-color 0.28s;
}
</style>
