<script setup>
import { useRouter } from "vue-router";
import navigation from "../../utils/navigation";

const router = useRouter();

const linkClick = (e, go) => {
    e.preventDefault(); // we choose when we navigate
    router.push({ name: go });
};
</script>
<template>
    <q-page-sticky
        v-if="$q.screen.gt.sm"
        expand
        position="left"
        class="bg-primary text-white"
    >
        <div class="q-px-sm column">
            <q-btn
                class="q-py-md"
                v-for="nav in navigation.filter(n => !['system_settings', 'page', 'category'].includes(n.text))"
                :key="nav.text"
                @click="(event) => linkClick(event, nav.link)"
                dense
                flat
                stack
                no-caps
                :class="{
                    'bg-white text-primary': $route.name === nav.link,
                }"
            >
                <q-icon :name="nav.icon" />
                <div>{{ $t(`links.${nav.text}`, 2) }}</div>
            </q-btn>
        </div>
    </q-page-sticky>
</template>
