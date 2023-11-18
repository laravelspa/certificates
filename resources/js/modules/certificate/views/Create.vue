<script setup>
import { defineAsyncComponent, reactive } from "vue";
const Form = defineAsyncComponent(() => import("../components/Form.vue"));

const formData = reactive({
    date: null,
    facility_name: "",
    facility_activity: "",
    facility_address: "",
    mobile: "",
    commercial_register: "",
    no_civil_registry: "",
    internal_cameras: "",
    external_cameras: "",
    recording_device: "",
    recording_duration: "",
    storage_disk: "",
    display: "",
    other_specifications: "",
    remarks: "",
});
</script>

<template>
    <Suspense>
        <template #default>
            <Form :form-data="formData" />
        </template>
        <template #fallback>
            <div class="fixed-center">
                <q-spinner-pie color="primary" size="10em" />
            </div>
        </template>
    </Suspense>
</template>
