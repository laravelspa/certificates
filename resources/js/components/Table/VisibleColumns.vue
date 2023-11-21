<script setup>
defineProps({
    inputModel: {
        type: String,
        default: () => '',
    },
    columns: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>

<template>
    <q-select
        multiple
        outlined
        dense
        options-dense
        :display-value="$q.lang.table.columns"
        emit-value
        map-options
        :options="columns"
        option-value="name"
        options-cover
        style="min-width: 100px"
        class="q-ml-md text-white"
        transition-show="jump-up"
        transition-hide="jump-up"
        behavior="menu"
        rounded
        :modelValue="inputModel"
        @update:modelValue="(value) => (inputModel = value)"
        :class="{'custom_selected': columns.length}"
    />
</template>
