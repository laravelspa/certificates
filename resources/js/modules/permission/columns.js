import { reactive } from "vue";
import i18n from "../../i18n";
const { t } = i18n.global
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
    name: "username",
    required: false,
    label: t('username'),
    align: "center",
    field: (row) => row.username,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "email",
    required: false,
    label: t('email'),
    align: "center",
    field: (row) => row.email,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "first_name",
    required: false,
    label: t('first_name'),
    align: "center",
    field: (row) => row.firstname,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "lastname",
    required: false,
    label: t('last_name'),
    align: "center",
    field: (row) => row.lastname,
    format: (val) => `${val}`,
    sortable: true,
  },
  // {
  //   name: "phone",
  //   required: false,
  //   label: "Phone",
  //   align: "center",
  //   field: (row) => row.phone,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "mobile",
  //   required: false,
  //   label: "Mobile",
  //   align: "center",
  //   field: (row) => row.mobile,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "first_address",
  //   required: false,
  //   label: "First Address",
  //   align: "center",
  //   field: (row) => row.first_address,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "second_address",
  //   required: false,
  //   label: "Second Address",
  //   align: "center",
  //   field: (row) => row.second_address,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "country",
  //   required: false,
  //   label: "Country",
  //   align: "center",
  //   field: (row) => row.country,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "city",
  //   required: false,
  //   label: "City",
  //   align: "center",
  //   field: (row) => row.city,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "state",
  //   required: false,
  //   label: "State",
  //   align: "center",
  //   field: (row) => row.state,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  // {
  //   name: "zip",
  //   required: false,
  //   label: "Zip",
  //   align: "center",
  //   field: (row) => row.zip,
  //   format: (val) => `${val}`,
  //   sortable: true,
  // },
  {
    name: "gender",
    required: false,
    label: "Gender",
    align: "center",
    field: (row) => row.gender,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "is_active",
    required: false,
    label: "Active",
    align: "center",
    field: (row) => row.is_active,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "actions",
    required: false,
    label: "Actions",
    align: "center",
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: false,
  },
]);