<script setup>
import { defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const Form = defineAsyncComponent(() => import("../components/Form.vue"));

const store = useStore();
const route = useRoute();

await store.dispatch("user/fetchUser", route.params.id);
const formData = computed(() => store.getters["user/getUser"]);
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
