<script setup>
import { computed, toRefs } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  module: {
    type: String,
    required: true,
    default: () => "user",
  },
  reference: {
    type: String,
    required: true,
    default: () => "id",
  },
  subtitle: {
    type: String,
    required: false,
    default: () => null,
  },
  itemId: {
    type: Number,
    required: true,
    default: () => 0,
  },
});
const { module, reference, subtitle, itemId } = toRefs(props);

const { t } = useI18n();
const formTitle = computed(() => {
  return !itemId.value
    ? t("action.new", {
        module: t(`links.${module.value}`, 1),
      })
    : t("action.edit", {
        module: t(`links.${module.value}`, 1),
      }) + ` ( ${reference.value} ) `;
});
</script>

<template>
  <q-card-section>
    <div class="row items-center justify-center">
      <div class="col-lg-6 col-md-12 col-xs-12 flex justify-center items-center">
        <div class="col-12">
          <div class="text-h5">{{ formTitle }}</div>
          <div class="text-subtitle2">{{ subtitle }}</div>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 col-xs-12 flex justify-center items-center">
        <div class="col-12">
          <q-btn
            :label="t('action.cancel')"
            color="negative"
            :to="{ name: `${module}.list` }"
            class="q-mr-md"
            v-permission="[`list-${module}`]"
          />
          <q-btn
            :label="t('action.save')"
            type="submit"
            color="positive"
            @click="$emit('on-submit')"
            v-permission="[`${!itemId ? `create-${module}` : `edit-${module}` }`]"
          />
        </div>
      </div>
    </div>
  </q-card-section>
</template>
