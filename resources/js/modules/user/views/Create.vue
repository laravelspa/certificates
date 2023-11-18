<script setup>
import { defineAsyncComponent, reactive } from "vue";
const Form = defineAsyncComponent(() => import("../components/Form.vue"));

const formData = reactive({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    password_confirmation: "",
    date_of_birth: null,
    date_of_joining: null,
    gender: 1,
    is_active: false,
    send_notify: false,
    roles: [],
    permissions: [],
    contacts: [],
    locations: [],
    remarks: ""
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
