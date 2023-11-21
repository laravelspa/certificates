<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const locale = computed(() => store.getters["locale/getLocale"]);
defineProps({
    label: {
        type: String,
        required: true,
        default: "",
    },
    inputModel: {
        type: String,
        default: () => "",
    },
    errors: {
        type: Array,
        required: false,
        default: () => [],
    },
});
</script>

<template>
    <q-select
        dense
        outlined
        rounded
        options-dense
        option-label="name"
        option-value="id"
        options-cover
        emit-value
        map-options
        :modelValue="inputModel"
        @update:modelValue="(value) => (inputModel = value)"
        v-bind="$attrs"
        :label="label"
        transition-show="jump-up"
        transition-hide="jump-up"
        behavior="menu"
    >
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
                v-if="scope.opt.name || scope.opt[`name_${locale}`]"
            >
                {{ scope.opt.name ?? scope.opt[`name_${locale}`] }}
            </q-chip>
        </template>
    </q-select>
</template>
