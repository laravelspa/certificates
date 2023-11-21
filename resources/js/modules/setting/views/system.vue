<script setup>
import { defineAsyncComponent } from "vue";
const Form = defineAsyncComponent(() => import("../components/Form.vue"));
</script>

<template>
    <Suspense>
        <template #default>
            <Form />
        </template>
        <template #fallback>
            <div class="fixed-center">
                <q-spinner-pie color="primary" size="10em" />
            </div>
        </template>
    </Suspense>
</template>
