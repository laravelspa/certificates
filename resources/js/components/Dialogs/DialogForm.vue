<script setup>
import { ref } from "vue";

defineProps({
    moduleValue: {
        type: Boolean,
        default: () => false,
    },
});

const maximizedToggle = ref(true);
</script>
<template>
    <q-dialog
        :modelValue="moduleValue"
        @update:modelValue="(value) => (moduleValue = value)"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
    >
        <q-card class="bg-primary text-white">
            <q-bar>
                <q-space />

                <q-btn
                    dense
                    flat
                    icon="minimize"
                    @click="maximizedToggle = false"
                    :disable="!maximizedToggle"
                >
                    <q-tooltip
                        v-if="maximizedToggle"
                        class="bg-white text-primary"
                        >Minimize</q-tooltip
                    >
                </q-btn>
                <q-btn
                    dense
                    flat
                    icon="crop_square"
                    @click="maximizedToggle = true"
                    :disable="maximizedToggle"
                >
                    <q-tooltip
                        v-if="!maximizedToggle"
                        class="bg-white text-primary"
                        >Maximize</q-tooltip
                    >
                </q-btn>
                <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>
            <q-card-section>
                <slot />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
