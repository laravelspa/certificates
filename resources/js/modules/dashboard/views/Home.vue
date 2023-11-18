<script setup>
import { Cookies } from "quasar";
import { ref, computed, watch } from "vue";

import themes from "../../../utils/themes";
import { useStore } from "vuex";

const themeToggle = ref(Cookies.get("theme"));
const modeToggle = ref(Cookies.get("mode"));
const THEME_NAME = ref("");

const { commit, getters } = useStore();
const getTheme = computed(() => getters["getTheme"], { root: true });

watch(
    themeToggle,
    (new_theme) => {
        let newTheme = themes.find((theme) => theme.name === new_theme);

        if (!newTheme || !new_theme) {
            newTheme = themes.find((theme) => theme.name === getTheme.value);
        }

        THEME_NAME.value = newTheme.name;

        commit("SET_THEME", new_theme, { root: true });
    },
    { immediate: true }
);

watch(
    modeToggle,
    (new_mode) => {
        commit("SET_MODE", new_mode, { root: true });
    },
    { immediate: true }
);
</script>
<template>
    <q-card
        class="q-pa-xl col-22 col-lg-3 col-md-6 col-sm-6 text-center"
        flat
        style="
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 20px;
        "
    >
        <h4 class="text-faded">
            <strong>
                {{ $t("links.theme_generator") }}
                <!-- {{ $t("links.dashboard") }} -->
            </strong>
        </h4>
        <h5 class="text-faded">
            Theme: <strong>{{ THEME_NAME }}</strong>
            <q-toggle
                keep-color
                label="Dark"
                v-model="modeToggle"
                color="primary"
                true-value="dark"
                false-value="light"
            />
        </h5>

        <q-card v-for="(theme, i) in themes">
            <q-card-section class="text-h3">
                {{ theme.name }}
                <q-toggle
                    keep-color
                    v-model="themeToggle"
                    color="primary"
                    :true-value="theme.name"
                />
            </q-card-section>

            <q-card-section class="row q-gutter-md text-center">
                <h6
                    class="q-pa-md col-2"
                    :style="`background-color: ${theme.colors.primary}`"
                >
                    Primary
                </h6>

                <h6
                    class="q-pa-md col-2"
                    :style="`background-color: ${theme.colors.secondary}`"
                >
                    Secondary
                </h6>

                <h6
                    class="q-pa-md col-2"
                    :style="`background-color: ${theme.colors.accent}`"
                >
                    Accent
                </h6>

                <h6
                    class="q-pa-md col-2"
                    :style="`background-color: ${theme.colors.info}`"
                >
                    Info
                </h6>

                <h6
                    class="q-pa-md col-2"
                    :style="`background-color: ${theme.colors.warning}`"
                >
                    Warning
                </h6>

                <h6
                    class="q-pa-md col-2"
                    :style="`background-color: ${theme.colors.positive}`"
                >
                    Positive
                </h6>

                <h6
                    class="q-pa-md col-2"
                    :style="`background-color: ${theme.colors.negative}`"
                >
                    Negative
                </h6>
            </q-card-section>
        </q-card>
    </q-card>
</template>
