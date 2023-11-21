<script setup>
defineProps({
    label: {
        type: String,
        required: true,
        default: "",
    },
    inputModel: {
        type: String,
        default: () =>
            new Date().toISOString().slice(0, 10).replaceAll("-", "/"),
    },
    errors: {
        type: Array,
        required: false,
        default: () => [],
    },
});
</script>
<template>
    <span hidden>{{ inputModel }}</span>
    <q-input
        outlined
        rounded
        :label="label"
        v-bind="$attrs"
        :modelValue="inputModel"
        @update:modelValue="(value) => (inputModel = value)"
        mask="date"
        :rules="['date']"
    >
        <template #append>
            <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                >
                    <q-date
                        :modelValue="inputModel"
                        @update:modelValue="(value) => (inputModel = value)"
                    >
                        <div class="row items-center justify-end">
                            <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                            />
                        </div>
                    </q-date>
                </q-popup-proxy>
            </q-icon>
        </template>
        <template #error>
            <div :class="$q.dark.isActive ? 'text-red-3' : 'text-negative'">
                {{ errors && errors[0].$message }}
            </div>
        </template>
    </q-input>
</template>
