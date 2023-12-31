import { reactive } from "vue";
import i18n from "../../i18n";
const { t } = i18n.global
import { genderTypes } from "../../utils/constraints";
export const columns = reactive([
    {
        name: "id",
        required: false,
        label: t('id'),
        align: "center",
        field: (row) => row.id,
        format: (val) => `${val}`,
        sortable: true,
    },
    {
        name: "avatar",
        required: false,
        label: t('avatar'),
        align: "center",
        field: (row) => row.avatar,
        format: (val) => `${val.url}`,
        sortable: true,
    },
    {
        name: "username",
        required: false,
        label: t('username'),
        align: "center",
        field: (row) => row.username,
        format: (val) => `${val}`,
        sortable: false,
    },
    {
        name: "email",
        required: false,
        label: t('email'),
        align: "center",
        field: (row) => row.email,
        format: (val) => `${val ?? t('table.no_default')}`,
        sortable: false,
    },
    {
        name: "firstname",
        required: false,
        label: t('firstname'),
        align: "center",
        field: (row) => row.firstname,
        format: (val) => `${val ?? t('table.no_default')}`,
        sortable: false,
    },
    {
        name: "lastname",
        required: false,
        label: t('lastname'),
        align: "center",
        field: (row) => row.lastname,
        format: (val) => `${val ?? t('table.no_default')}`,
        sortable: false,
    },
    {
        name: "gender",
        required: false,
        label: t('gender'),
        align: "center",
        field: (row) => row.gender,
        format: (val) => `${genderTypes.find(g => g.id === val)?.name ?? t('table.no_default')}`,
        sortable: true,
    },
    {
        name: "date_of_birth",
        required: false,
        label: t('date_of_birth'),
        align: "center",
        field: (row) => row.date_of_birth,
        format: (val) => `${val ? new Date(val).toDateString() : t('table.no_default')}`,
        sortable: false,
    },
    {
        name: "date_of_joining",
        required: false,
        label: t('date_of_joining'),
        align: "center",
        field: (row) => row.date_of_joining,
        format: (val) => `${val ? new Date(val).toDateString() : t('table.no_default')}`,
        sortable: false,
    },
    {
        name: "is_active",
        required: false,
        label: t('is_active'),
        align: "center",
        field: (row) => row.is_active,
        format: (val) => `${val === true ? t('select.status.active') : t('select.status.not_active')}`,
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
