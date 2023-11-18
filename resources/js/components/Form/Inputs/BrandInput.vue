<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

defineProps({
    inputModel: {
        type: String,
        default: () => '',
    },
    errors: {
        type: Array,
        required: false,
        default: () => [],
    },
});
const { t } = useI18n();
const store = useStore();
await store.dispatch("brand/fetchOptions");
const brands = computed(() => store.getters["brand/getOptions"]);

const options = ref(brands.value);

const filterFn = (val, update) => {
    if (val === "") {
        update(() => {
            options.value = brands.value;
        });
        return;
    }

    update(() => {
        const needle = val.toLowerCase();
        options.value = brands.value.filter(
            (v) => v.name.toLowerCase().indexOf(needle) > -1
        );
    });
};
</script>

<template>
    <q-select
        outlined
        rounded
        :options="options"
        options-dense
        option-label="name"
        option-value="id"
        options-cover
        emit-value
        map-options
        use-input
        input-debounce="0"
        @filter="filterFn"
        :modelValue="inputModel"
        @update:modelValue="(value) => (inputModel = value)"
        v-bind="$attrs"
        :label="t('brand_id')"
        transition-show="jump-up"
        transition-hide="jump-up"
        behavior="menu"
        clearable=""
    >
        <template #option="scope">
            <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                    <q-avatar size="md">
                        <img :src="scope.opt.logo.url" />
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ scope.opt.name }}</q-item-label>
                </q-item-section>
            </q-item>
        </template>
        <template #error>
            <div :class="$q.dark.isActive ? 'text-red-3' : 'text-negative'">
                {{ errors && errors[0].$message }}
            </div>
        </template>
        <template #selected-item="scope">
            <!-- removable
            @remove="scope.removeAtIndex(scope.index)" -->
            <q-chip
                :tabindex="scope.tabindex"
                color="primary"
                text-color="white"
                class="q-ma-none"
            >
                <q-avatar size="sm">
                    <img :src="scope.opt.logo.url" />
                </q-avatar>
                {{ scope.opt.name }}
            </q-chip>
        </template>
    </q-select>
</template>
