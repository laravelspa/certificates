<script setup>
import { useQuasar } from "quasar";
import languages from "quasar/lang/index.json";

import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const store = useStore();
const langs = computed(() => store.getters["locale/getLocales"]);
const appLanguages = languages.filter((lang) =>
    langs.value.includes(lang.isoName === "en-US" ? "en" : lang.isoName)
);

const localeOptions = appLanguages.map((lang) => ({
    label: lang.nativeName,
    value: lang.isoName === "en-US" ? "en" : lang.isoName,
}));

const { locale } = useI18n({ useScope: "global" });
const $q = useQuasar();

watch(
    locale,
    (val) => {
        // dynamic import, so loading on demand only
        import(
            /* webpackInclude: /(en|ar)\.js$/ */
            `../../../../node_modules/quasar/lang/${
                val === "en" ? "en-US" : val
            }.mjs`
        ).then((lang) => {
            $q.lang.set(lang.default);
            store.dispatch("locale/setLocale", val);
        });
    },
    { immediate: true }
);

const isLighterTheme = computed(() => store.getters.isLighterTheme);
</script>

<template>
    <q-select
        v-model="locale"
        :options="localeOptions"
        :label="$t('global.switch_language')"
        dense
        borderless
        emit-value
        map-options
        options-dense
        style="min-width: 120px"
        :color="isLighterTheme ? 'black' : ''"
        :label-color="isLighterTheme ? 'black' : ''"
        :dark="!isLighterTheme"
    >
        <template v-slot:selected-item="scope">
            <q-chip
                dense
                color="primary"
                :text-color="isLighterTheme ? 'white':''"
                :dark="!isLighterTheme"
                class="q-ma-none"
            >
                {{ scope.opt.label }}
            </q-chip>
        </template>
    </q-select>
    <!-- :dark="!isLighterTheme" -->
</template>
