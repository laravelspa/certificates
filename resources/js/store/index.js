import { Cookies, Dark, setCssVar } from "quasar";
import { createLogger, createStore } from "vuex";

import themes from "../utils/themes";
import router from "../router";
import { lowerFirst } from "lodash";


// Create a new store instance.
const store = createStore({
    // plugins: [createLogger()],
    state: {
        errors: [],
        message: null,
        loading: true,
        theme: Cookies.get("theme") ?? "Purple",
        mode: Cookies.get("mode") ?? "dark",
        lighterThemes: themes.filter((t) => !t.isDark),
        textClassForDarker: "text-white ",
        textClassForLighter: "text-black ",
        activeClassForBg: "bg-secondary ",
    },
    mutations: {
        SET_ERROR(state, error) {
            state.errors = [];
            Array.isArray(error)
                ? state.errors.push(...error)
                : state.errors.push(error);
        },
        ADD_MESSAGE(state, message) {
            state.message = message;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_THEME(state, theme) {
            if(theme) {
                state.theme = theme;
            }
            Cookies.set("theme", state.theme, {
                path: "/",
            });

            let { colors } = themes.find((theme) => theme.name === state.theme);

            setCssVar("primary", colors.primary);
            setCssVar("secondary", colors.secondary);
            setCssVar("accent", colors.accent);
            setCssVar("info", colors.info);
            setCssVar("warning", colors.warning);
            setCssVar("positive", colors.positive);
            setCssVar("negative", colors.negative);
        },
        SET_MODE(state, mode) {
            if(mode) {
                state.mode = mode;
            }
            
            Cookies.set("mode", state.mode, {
                path: "/",
            });
            Dark.isActive = state.mode === "dark";
            Dark.set(state.mode === "dark");
        },
    },
    getters: {
        getErrors: (state) => state.errors[0],
        getLoading: (state) => state.loading,
        getTheme: (state) => state.theme,
        getMode: (state) => state.mode,

        isLighterTheme: ({ lighterThemes }, { getTheme }) =>
            lighterThemes.some((light) => light.name === getTheme),
        getTextClass: (
            { textClassForDarker, textClassForLighter },
            { isLighterTheme }
        ) => {
            return isLighterTheme ? textClassForLighter : textClassForDarker;
        },
        isActiveClass:
            (
                { activeClassForBg },
                { getTheme, getTextClass }
            ) =>
                (activeLink) => {
                    let array = []
                    let moduleName = activeLink.split('.')[0];

                    if (['settings', 'system_settings', 'role', 'menu'].includes(moduleName)) {
                        array['setting'] = activeClassForBg + getTextClass;
                        array['system_settings'] = activeClassForBg + getTextClass;
                        array['role'] = activeClassForBg + getTextClass;
                        array['menu'] = activeClassForBg + getTextClass;
                        console.log('theme', getTheme);
                        console.log('class', array);
                        return array;
                    }

                    router.currentRoute.value.matched.some(({ name }) => name === activeLink)
                        ? array[moduleName] = activeClassForBg + getTextClass
                        : "";

                    return array;
                },
    },
    modules: {},
});

export default store;
