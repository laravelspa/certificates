<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
</script>

<template>
    <q-btn
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        flat
        round
    >
        <q-tooltip>Full Screen</q-tooltip>
    </q-btn>
</template>
