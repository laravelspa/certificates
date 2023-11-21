const state = {
    options: {
        groupBy: [],
        groupDesc: [],
        itemsPerPage: 15,
        multiSort: false,
        mustSort: false,
        page: 1,
        sortBy: ['id'],
        sortDesc: ['true']
    },
    optionsTrashed: {
        page: 1,
        itemsPerPage: 15,
        sortBy: ["id"],
        sortDesc: ["true"]
    },
    uploads: [],
    totalUploads: 0,
    uploadsTrashed: [],
    totalUploadsTrashed: 0,
    trashed: "false",
    search: "",
    upload: {},
    file: null,
    columns: ["name"]
};

export default state;
