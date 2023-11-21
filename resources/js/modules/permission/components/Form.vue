<script setup>
import { computed, defineAsyncComponent, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "../../../utils/i18n-validators";
import { helpers, requiredIf } from "@vuelidate/validators";
import countries from "../../../utils/countries";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const CardHeader = defineAsyncComponent(() =>
  import("../../../components/Form/CardHeader.vue")
);
const CountryFlag = defineAsyncComponent(() => import("vue-country-flag-next"));
const BaseInput = defineAsyncComponent(() =>
  import("../../../components/Form/Inputs/BaseInput.vue")
);
const FileUpload = defineAsyncComponent(() =>
  import("../../upload/views/components/FileUpload.vue")
);
const cities = (i) =>
  countries.find((country) => country?.countryName === formData.locations[i].country)
    ?.regions;

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const genderTypes = reactive([
  { id: 1, name: t("select.gender.male") },
  { id: 2, name: t("select.gender.female") },
]);

const contact = reactive({
  email: "",
  phone: "",
  mobile: "",
});

const location = reactive({
  country: "",
  city: "",
  state: "",
  first_address: "",
  second_address: "",
  zip: "",
});

const { formData } = defineProps({
  formData: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const containsUppercase = (value) => !helpers.req(value) || /[A-Z]/.test(value);
const containsLowercase = (value) => !helpers.req(value) || /[a-z]/.test(value);
const containsNumber = (value) => !helpers.req(value) || /[0-9]/.test(value);
const containsSpecial = (value) => !helpers.req(value) || /[#?!@$%^&*-]/.test(value);

const rules = computed(() => ({
  username: { required, minLength: minLength(8), maxLength: maxLength(100) },
  firstname: { minLength: minLength(3), maxLength: maxLength(50) },
  lastname: { minLength: minLength(3), maxLength: maxLength(50) },
  password: {
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
    sameAsPassword: sameAs(formData?.password),
  },
  email: { email },
  gender: { required },
  is_active: { required },
  role: { required },
}));

const v = useVuelidate(rules, formData);
const store = useStore();

const onSubmit = async () => {
  const validate = await v.value.$validate();
  if (!validate) {
    return;
  }
  if (route.params.id) {
    await store.dispatch("user/updateUser", formData);
  }
  if (!route.params.id) {
    await store.dispatch("user/createUser", formData);
  }
  router.push({ name: "user.list" });
};

const changeCountry = () => {
  formData.city = "";
};

const addTo = (key, value) => {
  formData[key].push({ ...value });
};

const removeFrom = (key, i) => {
  formData[key].splice(i, 1);
};
</script>

<template>
  <q-card class="bg-transparent" flat style="border-radius: 20px">
    <CardHeader
      @on-submit="onSubmit"
      module="user"
      :reference="formData?.username"
      :item-id="formData?.id"
      class="bg-dark"
    />
    <q-form @submit="onSubmit">
      <div class="row q-col-gutter-md q-mt-xs">
        <!-- Basic Informations -->
        <q-card-section class="col-lg-6 col-md-6 col-xs-12 q-px-none q-pb-none">
          <div class="col-12">
            <div class="text-h5 bg-primary q-pa-md">
              {{ t("card.basic_info") }}
            </div>
          </div>
          <div class="row bg-dark justify-between q-pt-lg">
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <BaseInput
                v-model="formData.username"
                :label="t('username')"
                :error="v.username.$error"
                @input="() => v.username.$touch()"
                @blur="() => v.username.$touch()"
                :errors="v.username.$errors"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <BaseInput
                v-model="formData.email"
                :label="t('email')"
                type="email"
                :error="v.email.$error"
                @input="() => v.email.$touch()"
                @blur="() => v.email.$touch()"
                :errors="v.email.$errors"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <BaseInput
                v-model="formData.firstname"
                :label="t('firstname')"
                :error="v.firstname.$error"
                @input="() => v.firstname.$touch()"
                @blur="() => v.firstname.$touch()"
                :errors="v.firstname.$errors"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <BaseInput
                v-model="formData.lastname"
                :label="t('lastname')"
                :error="v.lastname.$error"
                @input="() => v.lastname.$touch()"
                @blur="() => v.lastname.$touch()"
                :errors="v.lastname.$errors"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <BaseInput
                v-model="v.password.$model"
                :label="t('password')"
                :error="v.password.$error"
                @input="() => v.password.$touch()"
                @blur="() => v.password.$touch()"
                :errors="v.password.$errors"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <BaseInput
                v-model="v.password_confirmation.$model"
                :label="t('password_confirmation')"
                :error="v.password_confirmation.$error"
                @input="() => v.password_confirmation.$touch()"
                @blur="() => v.password_confirmation.$touch()"
                :errors="v.password_confirmation.$errors"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <q-select
                v-model="formData.gender"
                outlined
                rounded
                options-dense
                option-label="name"
                option-value="id"
                options-cover
                emit-value
                map-options
                :label="t('gender')"
                :options="genderTypes"
                :error="v.gender.$error"
                @input="() => v.gender.$touch()"
                @blur="() => v.gender.$touch()"
              >
                <template v-slot:error>
                  <div>
                    <span
                      class="text-red-500"
                      v-for="error in v.gender.$errors"
                      :key="error.$uid"
                    >
                      {{ error.$message }}
                    </span>
                  </div>
                </template>
              </q-select>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm">
              <q-toggle keep-color
                v-model="formData.is_active"
                :label="t('is_active')"
                :error="v.is_active.$error"
                @input="() => v.is_active.$touch()"
                @blur="() => v.is_active.$touch()"
              />
            </div>
          </div>
        </q-card-section>
        <!-- Image -->
        <q-card-section class="col-lg-6 col-md-6 col-xs-12 q-px-none q-pb-none">
          <div class="col-12">
            <div class="text-h5 bg-primary q-pa-md">
              {{ t("card.image") }}
            </div>
          </div>
          <div class="row bg-dark justify-center q-pt-lg">
            <div class="col-lg-9 col-md-12 col-xs-12 q-px-md q-pb-sm">
              <FileUpload
                :object="formData"
                namespace="formData"
                key-of-images="avatar"
              />
            </div>
          </div>
        </q-card-section>
        <!-- Role -->
        <q-card-section class="col-lg-6 col-md-6 col-xs-12 q-px-none q-pb-none">
          <div class="col-12">
            <div class="text-h5 bg-primary q-pa-md">
              {{ t("card.image") }}
            </div>
          </div>
          <div class="row bg-dark justify-center q-pt-lg">
            <div class="col-lg-12 col-md-12 col-xs-12 q-px-md q-pb-sm">
              <q-select
                v-model="formData.role"
                outlined
                rounded
                options-dense
                option-label="name"
                option-value="id"
                options-cover
                emit-value
                map-options
                :label="t('role')"
                :options="genderTypes"
                :error="v.role.$error"
                @input="() => v.role.$touch()"
                @blur="() => v.role.$touch()"
              >
                <template v-slot:error>
                  <div>
                    <span
                      class="text-red-500"
                      v-for="error in v.role.$errors"
                      :key="error.$uid"
                    >
                      {{ error.$message }}
                    </span>
                  </div>
                </template>
              </q-select>
            </div>
          </div>
        </q-card-section>
        <!-- Contacts -->
        <q-card-section class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none">
          <div class="col-12">
            <div class="text-h5 bg-primary q-pa-md">{{ t("card.contacts") }}</div>
          </div>
          <div v-for="(contact, i) in formData?.contacts" :key="i" class="bg-dark">
            <div class="row justify-between items-center q-pt-lg">
              <div
                :class="i !== 0 ? 'col-lg-3 col-md-3' : 'col-lg-4 col-md-4 col-xs-12'"
                class="q-px-md q-pb-sm"
              >
                {{ contact.mobile }}
                <BaseInput
                  rounded
                  outlined
                  :label="t('mobile')"
                  v-model="contact.mobile"
                />
              </div>
              <div
                :class="i !== 0 ? 'col-lg-4 col-md-4' : 'col-lg-4 col-md-4 col-xs-12'"
                class="q-px-md q-pb-sm"
              >
                <BaseInput v-model="contact.phone" :label="t('phone')" />
              </div>
              <div
                :class="i !== 0 ? 'col-lg-4 col-md-4' : 'col-lg-4 col-md-4 col-xs-12'"
                class="q-px-md q-pb-sm"
              >
                <BaseInput v-model="contact.email" :label="t('email')" type="email" />
              </div>
              <div class="col-lg-1 col-md-1 col-xs-12 text-center" v-if="i !== 0">
                <q-btn
                  @click="() => removeFrom('contacts', i)"
                  :label="t('action.delete')"
                  color="red-10"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-xs-12 q-py-lg text-center bg-dark">
            <q-btn
              @click="addTo('contacts', contact)"
              :label="t('action.add_another_contact')"
              color="primary"
            />
          </div>
        </q-card-section>
        <!-- Locations -->
        <q-card-section class="col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none">
          <div class="col-12">
            <div class="text-h5 bg-primary q-pa-md">
              {{ t("card.locations") }}
            </div>
          </div>
          <div v-for="(location, i) in formData?.locations" :key="i" class="bg-dark">
            <div class="row items-center q-pt-lg">
              <div class="col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm">
                <q-select
                  v-model="location.country"
                  outlined
                  rounded
                  options-dense
                  emit-value
                  option-value="countryName"
                  option-label="countryName"
                  map-options
                  :label="t('country')"
                  :options="countries"
                  @update:model-value="changeCountry()"
                >
                  <template v-slot:option="scope">
                    <q-item v-bind="scope.itemProps">
                      <q-item-section avatar>
                        <country-flag
                          :country="scope.opt?.countryShortCode"
                          size="normal"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label v-html="scope.opt.countryName"></q-item-label>
                        <q-item-label caption>{{
                          scope.opt?.countryShortCode
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:selected>
                    <country-flag
                      v-if="location.country"
                      :country="
                        countries.find(
                          (country) => country.countryName === location.country
                        )?.countryShortCode
                      "
                      size="normal"
                    />
                    <q-chip
                      v-if="location.country"
                      dense
                      square
                      color="primary"
                      text-color="white"
                    >
                      {{ location.country }}
                    </q-chip>
                  </template>
                </q-select>
              </div>
              <div class="col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm">
                <q-select
                  v-model="location.city"
                  outlined
                  rounded
                  options-dense
                  :label="t('city')"
                  :options="cities(i)"
                  option-label="name"
                  option-value="name"
                  options-cover
                  emit-value
                  map-options
                >
                  <template v-slot:selected>
                    <q-chip
                      v-if="location.city"
                      dense
                      square
                      color="primary"
                      text-color="white"
                    >
                      {{ location.city }}
                    </q-chip>
                  </template>
                </q-select>
              </div>
              <div class="col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm">
                <BaseInput v-model="location.first_address" :label="t('first_address')" />
              </div>
              <div class="col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm">
                <BaseInput
                  v-model="location.second_address"
                  :label="t('second_address')"
                />
              </div>
              <div class="col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm">
                <BaseInput v-model="location.state" :label="t('state')" />
              </div>
              <div class="col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm">
                <BaseInput v-model="location.zip" :label="t('zip')" />
              </div>
              <div class="col-lg-4 col-md-2 col-xs-12 text-center" v-if="i !== 0">
                <q-btn
                  @click="() => removeFrom('locations', i)"
                  :label="t('action.delete')"
                  color="red-10"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-xs-12 q-py-lg text-center bg-dark">
            <q-btn
              @click="addTo('locations', location)"
              :label="t('action.add_another_location')"
              color="primary"
            />
          </div>
        </q-card-section>
      </div>
    </q-form>
  </q-card>
</template>
