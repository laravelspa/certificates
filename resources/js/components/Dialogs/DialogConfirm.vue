<script setup>
import { ref } from "vue";

defineProps({
  dialogConfirm: {
    type: Boolean,
    default: () => false,
  },
});
</script>
<template>
  <q-dialog
    :modelValue="dialogConfirm"
    @update:modelValue="(value) => (dialogConfirm = value)"
    transition-show="slide-up"
    transition-hide="slide-down"
    persistent
  >
    <q-card style="min-width: 350px">
      <q-bar>
        <q-space />

        <q-btn dense flat icon="close" v-close-popup @click="$emit('close-confirm')">
          <q-tooltip>{{ $t("action.close") }}</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section class="text-center">
        <q-icon name="delete_outline" color="negative" size="4rem" />
        <h5>
          <slot />
        </h5>
      </q-card-section>

      <q-card-actions align="right">
        <slot name="action" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
