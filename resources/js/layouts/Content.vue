<script setup>
import { ref, defineAsyncComponent } from "vue";

const TheHeader = defineAsyncComponent(() => import("./main/theHeader.vue"));
const TheLeftSidebar = defineAsyncComponent(() =>
    import("./main/theLeftSidebar.vue")
);

const leftDrawerOpen = ref(false);
const miniState = ref(true);

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
    <q-layout view="hHh Lpr lff">
        <the-header>
            <q-btn
                flat
                dense
                round
                @click="toggleLeftDrawer"
                aria-label="Menu"
                icon="menu"
            />
        </the-header>

        <q-page-container
            class="page-container"
            :class="{'bg-grey-4': !$q.dark.isActive}"
        >
            <Suspense>
                <template #default>
                    <slot />
                </template>
                <template #fallback>
                    <div class="fixed-center">
                        <q-spinner-pie color="primary" size="10em" />
                    </div>
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <q-drawer
                        v-model="leftDrawerOpen"
                        show-if-above
                        :mini="miniState"
                        @mouseover="miniState = false"
                        @mouseout="miniState = true"
                        mini-to-overlay
                        :width="200"
                        :breakpoint="500"
                        bordered
                    >
                        <the-left-sidebar />
                    </q-drawer>
                </template>
                <template #fallback>
                    <div class="fixed-center">
                        <q-spinner-pie color="primary" size="10em" />
                    </div>
                </template>
            </Suspense>
        </q-page-container>
    </q-layout>
</template>
