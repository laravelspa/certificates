export const list = async (state, payload) => {
    state.uploads = payload.data;
    state.options.page = payload.meta?.current_page;
    state.options.itemsPerPage = payload.meta?.per_page;
    state.totalUploads = payload.meta?.total;
};

export const allTrashed = (state, payload) => {
    state.uploadsTrashed = payload.data;
    state.optionsTrashed.page = payload.meta?.current_page;
    state.optionsTrashed.itemsPerPage = payload.meta?.per_page;
    state.totalUploadsTrashed = payload.meta?.total;
};

export const search = (state, search) => {
    state.search = search;
};
export const selected = (state, selected) => {
    state.selected = selected;
};

export const get = (state, upload) => {
    state.upload = upload.data;
};


export const file = (state, file) => {
    state.file = file;
};
