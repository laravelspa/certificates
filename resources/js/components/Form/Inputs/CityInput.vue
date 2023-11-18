<script setup>
defineProps({
    label: {
        type: String,
        required: true,
        default: "",
    },
    location: {
        type: Object,
        required: true,
        default: () => {},
    },
    inputModel: {
        type: String,
        default: () => '',
    },
});
</script>

<template>
    <q-select
        outlined
        rounded
        options-dense
        option-label="name"
        option-value="name"
        options-cover
        emit-value
        map-options
        @update:modelValue="(value) => (inputModel = value)"
        v-bind="$attrs"
    >
        <template #selected>
            <q-chip
                v-if="location.city"
                dense
                square
                color="primary"
                text-color="white"
            >
                {{ location.city }}
            </q-chip>
        </template>
    </q-select>
</template>
