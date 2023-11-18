import { reactive } from "vue";
import { helpers } from "@vuelidate/validators";
import i18n from "../i18n";
const { t } = i18n.global

export const pageViews = reactive([
    { value: 'home', name: t("select.page_view.home") },
    { value: 'about-us', name: t("select.page_view.about_us") },
    { value: 'contact-us', name: t("select.page_view.contact_us") },
    { value: 'privacy-policy', name: t("select.page_view.privacy_policy") },
    { value: 'terms-and-conditions', name: t("select.page_view.terms_and_conditions") },
]);

export const positions = reactive([
    { id: 1, name: t("select.position.header") },
    { id: 2, name: t("select.position.footer_quick_links") },
    { id: 3, name: t("select.position.footer_resources_links") },
]);

export const linkTypes = reactive([
    { id: 1, name: t("select.link.page") },
    { id: 2, name: t("select.link.custom_link") },
]);

export const viewTypes = reactive([
    { id: 1, name: t("select.view.name") },
    { id: 2, name: t("select.view.icon") },
    { id: 3, name: t("select.view.both") },
]);

export const genderTypes = reactive([
    { id: 1, name: t("select.gender.male") },
    { id: 2, name: t("select.gender.female") },
]);

export const link = reactive({
    link_id: null,
});

export const contact = reactive({
    email: "",
    phone: "",
    mobile: "",
});

export const location = reactive({
    country: "N/D",
    city: "",
    state: "",
    first_address: "",
    second_address: "",
    zip: "",
    role: null,
    remarks: null,
});

export const extract = reactive({
    date:  new Date().toISOString().slice(0, 10),
    value: 0
});
export const drivers = reactive([{ id: "smtp", name: t("select.driver.smtp") }]);
export const containsUppercase = (value) => !helpers.req(value) || /[A-Z]/.test(value);
export const containsLowercase = (value) => !helpers.req(value) || /[a-z]/.test(value);
export const containsNumber = (value) => !helpers.req(value) || /[0-9]/.test(value);
export const containsSpecial = (value) =>
    !helpers.req(value) || /[#?!@$%^&*-]/.test(value);
export const slugRule = (value) =>
    !helpers.req(value) || !/[#?!@$%^&~,.<>;':"\/\[\]\|{}\(\)=+*]/.test(value);

