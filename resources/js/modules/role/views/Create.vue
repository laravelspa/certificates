<script setup>
import { defineAsyncComponent, reactive } from "vue";
const Form = defineAsyncComponent(() => import("../components/Form.vue"));

const formData = reactive({
  name: "",
  permissions: []
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
