import { computed } from 'vue';

export const useTable = (props, moduleName, action, store) => {
    const pagination = computed(() => store.getters[`${moduleName}/getPagination`]);
    const { page, rowsPerPage, sortBy, descending, rowsNumber, type } = props.pagination;
    const handleRequest = async () => {
        const filter = props.filter;
        await store.dispatch(`${moduleName}/${action}`, {
            filter,
            page,
            rowsPerPage,
            sortBy,
            descending,
            type
        })
    }
    
    pagination.value.page = page
    pagination.value.rowsPerPage = rowsPerPage
    pagination.value.sortBy = sortBy
    pagination.value.descending = descending
    pagination.value.rowsNumber = rowsNumber
    
    return {
        handleRequest
    }
};
