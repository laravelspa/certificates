<script setup>
import { defineAsyncComponent, reactive } from "vue";
import { columns } from "../columns";

const UniversalList = defineAsyncComponent(() =>
    import("../../../components/Table/UniversalList.vue")
);

const Form = defineAsyncComponent(() => import("../components/Form.vue"));
const config = reactive({
    moduleName: "role",
    fetchItems: "fetchRoles",
    getItems: "getRoles",
    destroyItem: "destroyRole",
    options: {
        import: false,
        export: true
    } // import csv - export csv
});
</script>
<template>
    <Suspense>
        <template #default>
            <UniversalList
                :config="config"
                :columns="columns"
            >
            </UniversalList>
        </template>
        <template #fallback>
            <div class="fixed-center">
                <q-spinner-pie color="primary" size="10em" />
            </div>
        </template>
    </Suspense>
</template>
