<script setup>
import { defineAsyncComponent, ref } from "vue";
import countries from "../../../utils/countries";
const CountryFlag = defineAsyncComponent(() => import("vue-country-flag-next"));
defineProps({
    label: {
        type: String,
        required: true,
        default: "",
    },
    location: {
        type: Object,
        required: true,
        default: () => {},
    },
    inputModel: {
        type: String,
        default: () => 'eg',
    },
});

const countriesOptions = ref(countries);

const filterCountries = (val, update) => {
    if (val === "") {
        update(() => {
            countriesOptions.value = countries;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        countriesOptions.value = countries.filter(
            (v) => v.countryName.toLowerCase().indexOf(needle) > -1
        );
    });
};
</script>

<template>
    <q-select
        outlined
        rounded
        options-dense
        options-cover
        emit-value
        map-options
        use-input
        input-debounce="0"
        option-value="countryName"
        option-label="countryName"
        :options="countriesOptions"
        @update:modelValue="(value) => (inputModel = value)"
        @filter="filterCountries"
        v-bind="$attrs"
    >
        <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                    <CountryFlag
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
            <q-chip dense square color="primary" text-color="white">
                {{ location.country }}
            </q-chip>
        </template>
    </q-select>
</template>
