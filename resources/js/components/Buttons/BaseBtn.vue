<script setup>
defineProps({
    color: {
        type: String,
        required: false,
        default: () => "primary",
    },
    toolbar: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <q-btn dense size="sm" :color="color" v-bind="$attrs">
        <q-tooltip dark :class="`bg-${color}`" v-if="toolbar">
            {{ toolbar }}
        </q-tooltip>
    </q-btn>
</template>
