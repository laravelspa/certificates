import { reactive } from "vue";
import i18n from "../../i18n";
const { t } = i18n.global

export const columns = reactive([
    {
        name: "serial_number",
        required: true,
        label: t('serial_number'),
        align: "center",
        field: (row) => row.serial_number,
        format: (val) => `${val}`,
        sortable: true,
    },

    {
        name: "facility_name",
        required: false,
        label: t('facility_name'),
        align: "center",
        field: (row) => row.facility_name,
        format: (val) => `${val}`,
        sortable: false,
    },

    {
        name: "mobile",
        required: false,
        label: t('mobile'),
        align: "center",
        field: (row) => row.mobile,
        format: (val) => `${val}`,
        sortable: false,
    },

    {
        name: "commercial_register",
        required: false,
        label: t('commercial_register'),
        align: "center",
        field: (row) => row.commercial_register,
        format: (val) => `${val}`,
        sortable: false,
    },

    {
        name: "created_by",
        required: false,
        label: t('created_by'),
        align: "center",
        field: (row) => row.created_by,
        format: (val) => `${val}`,
        sortable: false,
    },
    
    {
        name: "created_at",
        required: false,
        label: t('created_at'),
        align: "center",
        field: (row) => row.created_at,
        format: (val) => `${val}`,
        sortable: true,
    },

    {
        name: "actions",
        required: false,
        label: t('actions'),
        align: "center",
        field: (row) => row.id,
        format: (val) => `${val}`,
        sortable: false,
    },
]);
