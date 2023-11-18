<script setup>
import { ref, reactive, defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";

const theFullScreen = defineAsyncComponent(() => import("./theFullScreen.vue"));
const theSwitcherLang = defineAsyncComponent(() =>
    import("./theSwitcherLang.vue")
);

const store = useStore();

const loginUser = computed(() => store.getters["auth/LoginUser"]);
const SYSTEM_NAME = computed(() => store.getters["setting/getSystemName"]);

const logout = () => store.dispatch("auth/logoutAction");

const getTextClass = computed(() => store.getters.getTextClass);
</script>
<template>
    <q-header
        flat
        dark
        height-hint="64"
        class="bg-primary"
        :class="[getTextClass]"
    >
        <q-toolbar style="height: 64px">
            <slot />
            <q-toolbar-title
                v-if="$q.screen.gt.sm"
                shrink
                dark
                class="row items-center no-wrap"
            >
                <span class="q-ml-sm">
                    {{ SYSTEM_NAME }}</span
                >
            </q-toolbar-title>
            <q-space />
            <div class="q-gutter-sm row items-center no-wrap">
                <the-switcher-lang />
                <the-full-screen />

                <q-btn dense flat no-wrap>
                    <q-avatar size="26px">
                        <img :src="loginUser && loginUser['avatar']['url']" />
                    </q-avatar>
                    <q-icon name="arrow_drop_down" size="16px" />

                    <q-menu
                        auto-close
                        fit
                        transition-show="jump-down"
                        transition-hide="jump-up"
                    >
                        <q-list dense style="min-width: 100px">
                            <q-item
                                v-permission="[`show-profile`]"
                                clickable
                                v-ripple
                                :to="{ name: 'profile' }"
                                class="text-white"
                                active-class="bg-primary"
                            >
                                <q-item-section>
                                    {{ $t("links.profile") }}
                                </q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-ripple @click="logout">
                                <q-item-section>
                                    {{ $t("auth.logout") }}
                                </q-item-section>
                            </q-item>
                            <q-separator />
                        </q-list>
                    </q-menu>
                </q-btn>
            </div>
        </q-toolbar>
    </q-header>
</template>
