<script setup>
import { defineAsyncComponent, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { columns } from "../columns";

const UniversalList = defineAsyncComponent(() =>
    import("../../../components/Table/UniversalList.vue")
);

const { t } = useI18n();
const config = reactive({
    moduleName: "user",
    fetchItems: "fetchUsers",
    getItems: "getUsers",
    destroyItem: "destroyUser",
    bulkDestroyItems: "bulkDestroyUsers",
    options: {
        import: false,
        export: true
    } // import csv - export csv
});
</script>
<template>
    <Suspense>
        <template #default>
            <UniversalList :config="config" :columns="columns" />
        </template>
        <template #fallback>
            <div class="fixed-center">
                <q-spinner-pie color="primary" size="10em" />
            </div>
        </template>
    </Suspense>
</template>
