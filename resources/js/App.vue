<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { defineAsyncComponent } from "vue";
import { Cookies } from "quasar";

const LayoutBlank = defineAsyncComponent(() => import("./layouts/Blank.vue"));
const LayoutContent = defineAsyncComponent(() =>
    import("./layouts/Content.vue")
);

const store = useStore();
store.commit("SET_MODE", Cookies.get('mode'), { root: true });
store.commit("SET_THEME", Cookies.get('theme'), { root: true });


const route = useRoute();
const layouts = {
    blank: LayoutBlank,
    content: LayoutContent,
};
const resolveLayout = computed(() => {
    if (!route.name) return;

    if (route.meta.layout === "blank") return layouts["blank"];

    return layouts["content"];
});
</script>
<template>
    <component v-if="resolveLayout" :is="resolveLayout">
        <Suspense>
            <template #default>
                <RouterView />
            </template>
            <template #fallback>
                <div class="fixed-center">
                    <q-spinner-pie color="primary" size="10em" />
                </div>
            </template>
        </Suspense>
    </component>
</template>
