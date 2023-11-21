import { defineAsyncComponent } from "vue";

export const CardHeader = defineAsyncComponent(() =>
    import("../components/Form/CardHeader.vue")
);
export const BaseInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/BaseInput.vue")
);
export const DateInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/DateInput.vue")
);
export const SelectInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/SelectInput.vue")
);
export const CountryInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/CountryInput.vue")
);
export const CityInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/CityInput.vue")
);
export const AddBtn = defineAsyncComponent(() =>
    import("../components/Buttons/AddBtn.vue")
);

export const RemoveBtn = defineAsyncComponent(() =>
    import("../components/Buttons/RemoveBtn.vue")
);
export const RemarksInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/RemarksInput.vue")
);
export const CategoryInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/CategoryInput.vue")
);
export const BrandInput = defineAsyncComponent(() =>
    import("../components/Form/Inputs/BrandInput.vue")
);

export const BaseBtn = defineAsyncComponent(() => import("../components/Buttons/BaseBtn.vue"));

export const DialogConfirm = defineAsyncComponent(() =>
    import("../components/Dialogs/DialogConfirm.vue")
);

export const VisibleColumns = defineAsyncComponent(() =>
    import("../components/Table/VisibleColumns.vue")
);
export const FileUpload = defineAsyncComponent(() =>
    import("../modules/upload/views/components/FileUpload.vue")
);
export const CountryFlag = defineAsyncComponent(() => import("vue-country-flag-next"));
