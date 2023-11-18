<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { email } from "../../../utils/i18n-validators";

import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

import { BaseInput } from "../../../components/import";

const { t } = useI18n();

const formData = reactive({
    email: "",
    system_name: "",
    company_name: "",
    company_phone: "",
    company_address: "",
});

const rules = computed(() => ({
    email: { email },
}));

const $v = useVuelidate(rules, formData);
const store = useStore();

const onSubmit = async () => {
    let data = [];
    Object.keys(formData).forEach((key) => {
        data.push({
            key: key,
            value: formData[key] ?? null,
        });
    });
    const validate = await $v.value.$validate();
    if (!validate) {
        return;
    }

    await store.dispatch("setting/createOrUpdate", data);
};
await store.dispatch("setting/fetchSystemSettings");
const settings = computed(() => store.getters["setting/getSystemSettings"]);
const getSettingValue = async (key) => {
    return settings.value.find((setting) => setting.key === key)?.value;
};
onMounted(async () => {
    Object.keys(formData).forEach(async (key) => {
        formData[key] = (await getSettingValue(key)) || formData[key];
    });
});
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
        <q-card-section :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'">
            <div class="row items-center justify-center">
                <div
                    class="col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"
                >
                    <div class="col-12">
                        <div class="text-h5">
                            {{ t("card.system_settings") }}
                        </div>
                    </div>
                </div>

                <div
                    class="col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"
                >
                    <div class="col-12">
                        <q-btn
                            :label="t('action.cancel')"
                            color="negative"
                            :to="{ name: 'settings.list' }"
                            class="q-mr-md"
                            v-permission="['list-system-setting']"
                        />
                        <q-btn
                            :label="t('action.save')"
                            type="submit"
                            color="positive"
                            @click="onSubmit"
                            v-permission="['update-system-setting']"
                        />
                    </div>
                </div>
            </div>
        </q-card-section>
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
                                v-model="formData.system_name"
                                :label="t('system_name')"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="formData.email"
                                :label="t('email')"
                                type="email"
                                :error="$v.email.$error"
                                @input="() => $v.email.$touch()"
                                @blur="() => $v.email.$touch()"
                                :errors="$v.email.$errors"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="formData.company_name"
                                :label="t('company_name')"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="formData.company_phone"
                                :label="t('company_phone')"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="formData.company_address"
                                :label="t('company_address')"
                            />
                        </div>
                    </div>
                </q-card-section>
            </div>
        </q-form>
    </q-card>
</template>
