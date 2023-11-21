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
    name: "name",
    required: false,
    label: t('name'),
    align: "center",
    field: (row) => row.name,
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