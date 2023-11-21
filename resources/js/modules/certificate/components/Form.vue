<script setup>
import { computed, toRefs } from "vue";
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
const route = useRoute();
const router = useRouter();
const store = useStore();

const props = defineProps({
    formData: {
        type: Object,
        required: true,
        default: () => {},
    },
});

const { formData } = toRefs(props);

const rules = computed(() => ({
    date: { required },
    facility_name: { required },
    facility_activity: { required },
    facility_address: { required },
    mobile: { required },
    commercial_register: { required },
    internal_cameras: { required },
    external_cameras: { required },
    recording_device: { required },
    recording_duration: { required },
    storage_disk: { required },
    display: { required },
    other_specifications: { required },
    no_civil_registry: { required },
    mobile: { required },
}));

const $v = useVuelidate(rules, formData);

const onSubmit = async () => {
    const validate = await $v.value.$validate();
    
    if (!validate) {
        return;
    }

    if (route.params.id) {
        await store.dispatch("certificate/updateCertificate", formData.value);
        router.push({ name: "certificate.list" });
    }
    if (!route.params.id) {
        await store.dispatch("certificate/createCertificate", formData.value);
        router.push({ name: "certificate.list" });
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
            module="certificate"
            :reference="formData.serial_number"
            :item-id="formData?.id"
            :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
        />
        <q-form @submit="onSubmit">
            <div class="row q-col-gutter-md q-mt-xs">
                <!-- Basic Information -->
                <q-card-section
                    class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                >
                    <!-- Facility Informations -->
                    <q-card-section
                        class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                    >
                        <div class="col-12">
                            <div class="text-h5 bg-primary text-white q-pa-md">
                                {{ t("card.facility_info") }}
                            </div>
                        </div>
                        <div
                            class="row justify-between q-py-lg"
                            :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                        >
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <q-input
                                    outlined
                                    rounded
                                    :label="t(`date`)"
                                    v-model="formData.date"
                                    mask="date"
                                    :rules="['date']"
                                    :error="$v[`date`].$error"
                                    @input="() => $v[`date`].$touch()"
                                    @blur="() => $v[`date`].$touch()"
                                >
                                    <template #append>
                                        <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                cover
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-date v-model="formData.date">
                                                    <div
                                                        class="row items-center justify-end"
                                                    >
                                                        <q-btn
                                                            v-close-popup
                                                            label="Close"
                                                            color="primary"
                                                            flat
                                                        />
                                                    </div>
                                                </q-date>
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                    <template #error>
                                        <div
                                            :class="
                                                $q.dark.isActive
                                                    ? 'text-red-3'
                                                    : 'text-negative'
                                            "
                                        >
                                            {{
                                                $v[`date`].$error
                                                    ? $v[`date`].$errors[0]
                                                          .$message
                                                    : ""
                                            }}
                                        </div>
                                    </template>
                                </q-input>
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`facility_name`]"
                                    :label="t(`facility_name`)"
                                    :error="$v[`facility_name`].$error"
                                    @input="() => $v[`facility_name`].$touch()"
                                    @blur="() => $v[`facility_name`].$touch()"
                                    :errors="$v[`facility_name`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`facility_activity`]"
                                    :label="t(`facility_activity`)"
                                    :error="$v[`facility_activity`].$error"
                                    @input="
                                        () => $v[`facility_activity`].$touch()
                                    "
                                    @blur="
                                        () => $v[`facility_activity`].$touch()
                                    "
                                    :errors="$v[`facility_activity`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`facility_address`]"
                                    :label="t(`facility_address`)"
                                    :error="$v[`facility_address`].$error"
                                    @input="
                                        () => $v[`facility_address`].$touch()
                                    "
                                    @blur="
                                        () => $v[`facility_address`].$touch()
                                    "
                                    :errors="$v[`facility_address`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`mobile`]"
                                    :label="t(`mobile`)"
                                    :error="$v[`mobile`].$error"
                                    @input="() => $v[`mobile`].$touch()"
                                    @blur="() => $v[`mobile`].$touch()"
                                    :errors="$v[`mobile`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`commercial_register`]"
                                    :label="t(`commercial_register`)"
                                    :error="$v[`commercial_register`].$error"
                                    @input="
                                        () => $v[`commercial_register`].$touch()
                                    "
                                    @blur="
                                        () => $v[`commercial_register`].$touch()
                                    "
                                    :errors="$v[`commercial_register`].$errors"
                                    type="number"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`no_civil_registry`]"
                                    :label="t(`no_civil_registry`)"
                                    :error="$v[`no_civil_registry`].$error"
                                    @input="
                                        () => $v[`no_civil_registry`].$touch()
                                    "
                                    @blur="
                                        () => $v[`no_civil_registry`].$touch()
                                    "
                                    :errors="$v[`no_civil_registry`].$errors"
                                    type="number"
                                />
                            </div>
                        </div>
                    </q-card-section>

                    <!-- Cameras Informations -->
                    <q-card-section
                        class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                    >
                        <div class="col-12">
                            <div class="text-h5 bg-primary text-white q-pa-md">
                                {{ t("card.cameras_info") }}
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
                                    v-model="formData[`internal_cameras`]"
                                    :label="t(`internal_cameras`)"
                                    :error="$v[`internal_cameras`].$error"
                                    @input="
                                        () => $v[`internal_cameras`].$touch()
                                    "
                                    @blur="
                                        () => $v[`internal_cameras`].$touch()
                                    "
                                    :errors="$v[`internal_cameras`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`external_cameras`]"
                                    :label="t(`external_cameras`)"
                                    :error="$v[`external_cameras`].$error"
                                    @input="
                                        () => $v[`external_cameras`].$touch()
                                    "
                                    @blur="
                                        () => $v[`external_cameras`].$touch()
                                    "
                                    :errors="$v[`external_cameras`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`recording_device`]"
                                    :label="t(`recording_device`)"
                                    :error="$v[`recording_device`].$error"
                                    @input="
                                        () => $v[`recording_device`].$touch()
                                    "
                                    @blur="
                                        () => $v[`recording_device`].$touch()
                                    "
                                    :errors="$v[`recording_device`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`recording_duration`]"
                                    :label="t(`recording_duration`)"
                                    :error="$v[`recording_duration`].$error"
                                    @input="
                                        () => $v[`recording_duration`].$touch()
                                    "
                                    @blur="
                                        () => $v[`recording_duration`].$touch()
                                    "
                                    :errors="$v[`recording_duration`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`storage_disk`]"
                                    :label="t(`storage_disk`)"
                                    :error="$v[`storage_disk`].$error"
                                    @input="() => $v[`storage_disk`].$touch()"
                                    @blur="() => $v[`storage_disk`].$touch()"
                                    :errors="$v[`storage_disk`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`display`]"
                                    :label="t(`display`)"
                                    :error="$v[`display`].$error"
                                    @input="() => $v[`display`].$touch()"
                                    @blur="() => $v[`display`].$touch()"
                                    :errors="$v[`display`].$errors"
                                />
                            </div>

                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="formData[`other_specifications`]"
                                    :label="t(`other_specifications`)"
                                    :error="$v[`other_specifications`].$error"
                                    @input="
                                        () =>
                                            $v[`other_specifications`].$touch()
                                    "
                                    @blur="
                                        () =>
                                            $v[`other_specifications`].$touch()
                                    "
                                    :errors="$v[`other_specifications`].$errors"
                                />
                            </div>
                        </div>
                    </q-card-section>
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
