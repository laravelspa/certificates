import Upload from '../../../models/Upload'
const UploadModel = new Upload('uploads')

export const list = async ({ commit, state }, value) => {
    let { page, itemsPerPage, sortBy, sortDesc } = value;
    let { search, columns, trashed } = state;
    let payload = await UploadModel.list({
        page,
        itemsPerPage,
        sortBy,
        sortDesc,
        search,
        columns,
        trashed
    });
    commit("list", payload);
};

export const get = async ({ commit }, uplaodId) => {
    let uplaod = await UploadModel.get(uplaodId);
    commit("get", uplaod);
};

export const reorder = async (_, images) => {
    await UploadModel.reorder(images);
};

export const upload = async ({ commit }, uplaod) => {
    let response = await UploadModel.upload(uplaod);
    commit("file", response.payload)
};

export const destroy = async (_, uplaod) => {
    await UploadModel.destroy(uplaod);
};