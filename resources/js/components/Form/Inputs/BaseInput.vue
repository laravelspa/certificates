<script setup>
defineProps({
    label: {
        type: String,
        required: true,
        default: "",
    },
    inputModel: {
        type: [String, Number],
        default: "",
    },
    type: {
        type: String,
        required: false,
        default: "text",
    },
    errors: {
        type: Array,
        required: false,
        default: () => [],
    },
});
</script>

<template>
    <q-input
        outlined
        rounded
        bottom-slots
        lazy-rules
        :type="type"
        :label="label"
        v-bind="$attrs"
        :modelValue="inputModel"
        @update:modelValue="(value) => (inputModel = value)"
        autocomplete="off"
    >
        <template #error>
            <div :class="$q.dark.isActive ? 'text-red-3' : 'text-negative'">
                {{ errors && errors[0].$message }}
            </div>
        </template>
        <template #prepend>
            <slot name="prepand" />
        </template>
        <template #append>
            <slot name="append" />
        </template>
    </q-input>
</template>
