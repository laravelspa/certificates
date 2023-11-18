<script setup>
import { computed, ref, toRefs } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "../../../utils/i18n-validators";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import {
    CardHeader,
    BaseInput,
    RemarksInput,
} from "../../../components/import";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const props = defineProps({
    formData: {
        type: Object,
        required: true,
        default: () => {},
    },
});
const { formData } = toRefs(props);

const rules = computed(() => ({
    name: { required, minLength: minLength(4), maxLength: maxLength(100) },
    permissions: { required },
}));
const $v = useVuelidate(rules, formData);
const store = useStore();

await store.dispatch("permission/fetchOptions");
const permissions = computed(() => store.getters["permission/getOptions"]);

const onSubmit = async () => {
    const validate = await $v.value.$validate();
    if (!validate) {
        return;
    }
    if (route.params.id) {
        await store.dispatch("role/updateRole", formData.value);
        router.push({ name: "role.list" });
    }
    if (!route.params.id) {
        await store.dispatch("role/createRole", formData.value);
        router.push({ name: "role.list" });
    }
};
</script>

<template>
    <q-card
        class="bg-transparent"
        flat
        style="
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 20px;
        "
    >
        <CardHeader
            @on-submit="onSubmit"
            module="role"
            :reference="formData?.name"
            :item-id="formData?.id"
            :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
        />
        <q-form @submit="onSubmit">
            <div class="row q-col-gutter-md q-mt-xs">
                <!-- Basic Informations -->
                <q-card-section
                    class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                >
                    <div class="col-12">
                        <div class="text-h5 bg-primary text-white q-pa-md">
                            {{ t("card.basic_info") }}
                        </div>
                    </div>
                    <div
                        class="row justify-between q-py-lg"
                        :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                    >
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="formData.name"
                                :label="t('name')"
                                :error="$v.name.$error"
                                @input="() => $v.name.$touch()"
                                @blur="() => $v.name.$touch()"
                                :errors="$v.name.$errors"
                            />
                        </div>
                    </div>
                </q-card-section>
                <q-card-section
                    class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                >
                    <div class="col-12">
                        <div class="text-h5 bg-primary text-white q-pa-md">
                            {{ t("card.priviliges") }}
                        </div>
                    </div>
                    <div
                        class="row justify-center q-pt-lg"
                        :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                    >
                        <div
                            class="col-lg-12 col-md-12 col-xs-12 q-px-md q-pb-md"
                        >
                            <q-tree
                                class="col-12 col-sm-6"
                                :nodes="permissions"
                                node-key="name"
                                label-key="name"
                                tick-strategy="leaf"
                                v-model:ticked="formData.permissions"
                            />
                        </div>
                    </div>
                </q-card-section>

                <!-- Remarks -->
                <q-card-section
                    class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                >
                    <div class="col-12">
                        <div class="text-h5 text-white bg-primary q-pa-md">
                            {{ t("card.remarks") }}
                        </div>
                    </div>
                    <div :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'">
                        <div class="row items-center q-pt-lg">
                            <div class="col-12 q-px-md q-pb-md">
                                <RemarksInput v-model="formData.remarks" />
                            </div>
                        </div>
                    </div>
                </q-card-section>
            </div>
        </q-form>
    </q-card>
</template>
