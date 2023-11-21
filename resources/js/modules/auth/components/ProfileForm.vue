<script setup>
import { computed, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
    required,
    email,
    minLength,
    maxLength,
    sameAs,
    requiredIf,
} from "../../../utils/i18n-validators";
import { helpers } from "@vuelidate/validators";
import countries from "../../../utils/countries";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import {
    genderTypes,
    location,
    contact,
    containsLowercase,
    containsUppercase,
    containsNumber,
    containsSpecial,
} from "../../../utils/constraints";
import {
    BaseInput,
    DateInput,
    SelectInput,
    CountryInput,
    CityInput,
    AddBtn,
    RemoveBtn,
    RemarksInput,
    FileUpload,
} from "../../../components/import";

const cities = (i) =>
    countries.find(
        (country) =>
            country?.countryName === formData.value.locations[i].country
    )?.regions;
const { t } = useI18n();
const isPwd = ref(true);
const isPwdConf = ref(true);

const store = useStore();

await store.dispatch("auth/fetchProfile");
const formData = computed(() => store.getters["auth/getProfile"]);

const rules = computed(() => ({
    username: { required, minLength: minLength(8), maxLength: maxLength(100) },
    firstname: { minLength: minLength(3), maxLength: maxLength(50) },
    lastname: { minLength: minLength(3), maxLength: maxLength(50) },
    password: {
        requiredIfRef: requiredIf(!formData.value.id),
        containsUppercase: helpers.withMessage(
            t("validations.contains_uppercase", { property: "password" }),
            containsUppercase
        ),
        containsLowercase: helpers.withMessage(
            t("validations.contains_lowercase", { property: "password" }),
            containsLowercase
        ),
        containsNumber: helpers.withMessage(
            t("validations.contains_number", { property: "password" }),
            containsNumber
        ),
        containsSpecial: helpers.withMessage(
            t("validations.contains_special", { property: "password" }),
            containsSpecial
        ),
        minLength: minLength(8),
        maxLength: maxLength(100),
    },
    password_confirmation: {
        requiredIfRef: requiredIf(!formData.value.id),
        sameAsPassword: helpers.withMessage(
            t("validations.sameAs", {
                property: "password",
                other: "password_confirmation",
            }),
            sameAs(formData.value.password)
        ),
    },
    email: { email, requiredIfRef: requiredIf(formData.value.send_notify) },
    gender: { required },
    is_active: { required }
}));
const $v = useVuelidate(rules, formData);

const onSubmit = async () => {
    const validate = await $v.value.$validate();
    if (!validate) {
        return;
    }

    await store.dispatch("auth/updateProfile", formData.value);
};

const changeCountry = (i) => {
    formData.value.locations[i].city = "";
};

const addTo = (key, value) => {
    formData.value[key].push({ ...value });
};

const removeFrom = (key, i) => {
    formData.value[key].splice(i, 1);
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
        <q-card-section :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'">
            <div class="row items-center justify-center">
                <div
                    class="col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"
                >
                    <div class="col-12">
                        <div class="text-h5">
                            {{ t("links.profile") }}
                        </div>
                    </div>
                </div>

                <div
                    class="col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"
                >
                    <div class="col-12">
                        <q-btn
                            :label="t('action.dashboard')"
                            color="negative"
                            :to="{ name: 'dashboard' }"
                            class="q-mr-md"
                        />
                        <q-btn
                            :label="t('action.save')"
                            type="submit"
                            color="positive"
                            @click="onSubmit"
                            v-permission="[`update-profile`]"
                        />
                    </div>
                </div>
            </div>
        </q-card-section>
        <q-form @submit="onSubmit">
            <div class="row q-col-gutter-md q-mt-xs">
                <!-- Image -->
                <q-card-section
                    class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                >
                    <div class="col-12">
                        <div class="text-h5 text-white bg-primary q-pa-md">
                            {{ t("card.image") }}
                        </div>
                    </div>
                    <div
                        class="row justify-center q-pt-lg"
                        :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                        style="min-height: 165px"
                    >
                        <div
                            class="col-lg-9 col-md-12 col-xs-12 q-px-md q-pb-sm"
                        >
                            <FileUpload
                                :object="formData"
                                namespace="formData"
                                key-of-images="avatar"
                            />
                        </div>
                    </div>
                </q-card-section>
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
                                v-model="formData.username"
                                :label="t('username')"
                                :error="$v.username.$error"
                                @input="() => $v.username.$touch()"
                                @blur="() => $v.username.$touch()"
                                :errors="$v.username.$errors"
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
                                v-model="formData.firstname"
                                :label="t('firstname')"
                                :error="$v.firstname.$error"
                                @input="() => $v.firstname.$touch()"
                                @blur="() => $v.firstname.$touch()"
                                :errors="$v.firstname.$errors"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="formData.lastname"
                                :label="t('lastname')"
                                :error="$v.lastname.$error"
                                @input="() => $v.lastname.$touch()"
                                @blur="() => $v.lastname.$touch()"
                                :errors="$v.lastname.$errors"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="$v.password.$model"
                                :label="t('password')"
                                :error="$v.password.$error"
                                @input="() => $v.password.$touch()"
                                @blur="() => $v.password.$touch()"
                                :errors="$v.password.$errors"
                                :type="isPwd ? 'password' : 'text'"
                            >
                                <template #append>
                                    <q-icon
                                        :name="
                                            isPwd
                                                ? 'visibility_off'
                                                : 'visibility'
                                        "
                                        class="cursor-pointer"
                                        @click="isPwd = !isPwd"
                                    />
                                </template>
                            </BaseInput>
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <BaseInput
                                v-model="$v.password_confirmation.$model"
                                :label="t('password_confirmation')"
                                :error="$v.password_confirmation.$error"
                                @input="() => $v.password_confirmation.$touch()"
                                @blur="() => $v.password_confirmation.$touch()"
                                :errors="$v.password_confirmation.$errors"
                                :type="isPwdConf ? 'password' : 'text'"
                            >
                                <template #append>
                                    <q-icon
                                        :name="
                                            isPwdConf
                                                ? 'visibility_off'
                                                : 'visibility'
                                        "
                                        class="cursor-pointer"
                                        @click="isPwdConf = !isPwdConf"
                                    />
                                </template>
                            </BaseInput>
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <SelectInput
                                v-model="formData.gender"
                                :label="t('gender')"
                                :options="genderTypes"
                                :error="$v.gender.$error"
                                :errors="$v.gender.$errors"
                                @input="() => $v.gender.$touch()"
                                @blur="() => $v.gender.$touch()"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <q-toggle keep-color
                                v-model="formData.is_active"
                                :label="t('is_active')"
                                :error="$v.is_active.$error"
                                @input="() => $v.is_active.$touch()"
                                @blur="() => $v.is_active.$touch()"
                            />
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <DateInput
                                v-model="formData.date_of_birth"
                                :label="t('date_of_birth')"
                            >
                                <template #append>
                                    <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy
                                            cover
                                            transition-show="scale"
                                            transition-hide="scale"
                                        >
                                            <q-date
                                                v-model="formData.date_of_birth"
                                            >
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
                            </DateInput>
                        </div>
                        <div
                            class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                        >
                            <DateInput
                                v-model="formData.date_of_joining"
                                :label="t('date_of_joining')"
                            >
                                <template #append>
                                    <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy
                                            cover
                                            transition-show="scale"
                                            transition-hide="scale"
                                        >
                                            <q-date
                                                v-model="
                                                    formData.date_of_joining
                                                "
                                            >
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
                            </DateInput>
                        </div>
                    </div>
                </q-card-section>

                <!-- Contacts -->
                <q-card-section
                    class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                >
                    <div class="col-12">
                        <div class="text-h5 text-white bg-primary q-pa-md">
                            {{ t("card.contacts") }}
                        </div>
                    </div>
                    <div
                        v-for="(contact, i) in formData?.contacts"
                        :key="i"
                        :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                    >
                        <div class="row justify-between items-center q-pt-lg">
                            <div
                                class="q-px-md q-pb-sm col-lg-6 col-md-6 col-xs-12"
                            >
                                <BaseInput
                                    rounded
                                    outlined
                                    :label="t('mobile')"
                                    v-model="contact.mobile"
                                />
                            </div>
                            <div
                                class="q-px-md q-pb-sm col-lg-6 col-md-6 col-xs-12"
                            >
                                <BaseInput
                                    v-model="contact.phone"
                                    :label="t('phone')"
                                />
                            </div>
                            <div
                                class="q-px-md q-pb-sm col-lg-6 col-md-6 col-xs-12"
                            >
                                <BaseInput
                                    v-model="contact.email"
                                    :label="t('email')"
                                    type="email"
                                />
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 text-center"
                            >
                                <RemoveBtn
                                    @click="() => removeFrom('contacts', i)"
                                    class="q-mb-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-12 col-md-12 col-xs-12 q-py-lg text-center"
                        :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                    >
                        <AddBtn @click="() => addTo('contacts', contact)" />
                    </div>
                </q-card-section>
                <!-- Locations -->
                <q-card-section
                    class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"
                >
                    <div class="col-12">
                        <div class="text-h5 text-white bg-primary q-pa-md">
                            {{ t("card.locations") }}
                        </div>
                    </div>
                    <div
                        v-for="(location, i) in formData?.locations"
                        :key="i"
                        :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                    >
                        <div class="row items-center q-pt-lg">
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <CountryInput
                                    v-model="location.country"
                                    :label="t('country')"
                                    @update:modelValue="changeCountry(i)"
                                    :location="location"
                                />
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <CityInput
                                    v-model="location.city"
                                    :label="t('city')"
                                    :options="cities(i)"
                                    :location="location"
                                />
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="location.first_address"
                                    :label="t('first_address')"
                                />
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="location.second_address"
                                    :label="t('second_address')"
                                />
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="location.state"
                                    :label="t('state')"
                                />
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"
                            >
                                <BaseInput
                                    v-model="location.zip"
                                    :label="t('zip')"
                                />
                            </div>
                            <div
                                class="col-lg-12 col-md-12 col-xs-12 text-center"
                            >
                                <RemoveBtn
                                    @click="() => removeFrom('locations', i)"
                                    class="q-mb-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-12 col-md-12 col-xs-12 q-py-lg text-center"
                        :class="!$q.dark.isActive ? 'bg-white' : 'bg-dark'"
                    >
                        <AddBtn @click="() => addTo('locations', location)" />
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
