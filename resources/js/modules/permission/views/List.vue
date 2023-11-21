<script setup>
import { defineAsyncComponent, reactive } from "vue";
import { columns } from "../columns";

const UniversalList = defineAsyncComponent(() =>
    import("../../../components/Table/UniversalList.vue")
);

const Form = defineAsyncComponent(() => import("../components/Form.vue"));
const config = reactive({
    moduleName: "user",
    fetchItems: "fetchUsers",
    getItems: "getUsers",
    destroyItem: "destroyUser",
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
