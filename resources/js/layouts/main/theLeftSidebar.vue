<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import navigation from "../../utils/navigation";

const route = useRoute();
const store = useStore();

const getTextClass = computed(() => store.getters.getTextClass);
const isActiveClass = computed(() =>
    store.getters.isActiveClass(route.name)
);
</script>
<template>
    <!-- drawer content -->
    <q-scroll-area
        class="fit bg-primary"
        :horizontal-thumb-style="{ opacity: 0 }"
    >
        <q-list padding dark>
            <q-item
                :class="[isActiveClass['dashboard'], getTextClass]"
                clickable
                v-ripple
                exact
                :to="{ name: 'dashboard' }"
            >
                <q-item-section avatar>
                    <q-icon name="dashboard" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ $t(`links.dashboard`, 2) }}</q-item-label>
                </q-item-section>
            </q-item>
            <template
                v-for="nav in navigation.filter(
                    (n) => !['system_settings', 'menu', 'role'].includes(n.text)
                )"
                :key="nav.text"
            >
                <q-item
                    v-permission="[`list-${nav.text}`]"
                    :class="[isActiveClass[nav.text], getTextClass]"
                    clickable
                    v-ripple
                    exact
                    :to="{ name: nav.link }"
                >
                    <q-item-section avatar>
                        <q-icon :name="nav.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{
                            $t(`links.${nav.text}`, 2)
                        }}</q-item-label>
                    </q-item-section>
                </q-item>
                <q-separator :key="'sep' + index" v-if="nav.separator" />
            </template>
        </q-list>
    </q-scroll-area>
</template>
