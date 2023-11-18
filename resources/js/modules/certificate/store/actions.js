import { Loading } from "quasar";
import { fireErrorNotify, fireLoadingSpinner, fireSuccessNotify } from '../../../utils/notify';

import i18n from "../../../i18n";
const { t } = i18n.global

import Certificate from '../../../models/Certificate'
const CertificateModel = new Certificate()

export const fetchCertificates = ({ commit }, options) => {
    commit('SET_LOADING', true, { root: true })
    return new Promise((resolve, reject) => {
        CertificateModel.list(options).then(res => {
            Loading.hide();
            commit('SET_PAGES', res.data)
            commit('SET_PAGINATION', res.meta)
            commit('SET_LOADING', false, { root: true })
            resolve(res);
        })
            .catch(error => {
                commit('SET_LOADING', false, { root: true })
                reject(error);
            });
    })
};

export const fetchCertificate = ({ commit }, id) => {
    return new Promise((resolve, reject) => {
        CertificateModel.get(id).then(res => {
            commit('SET_PAGE', res.data)
            resolve(res);
        })
            .catch(error => {
                reject(error);
            });
    })
};

export const createCertificate = async ({ dispatch }, certificate) => {
    fireLoadingSpinner('creating_module')
    return new Promise((resolve, reject) => {
        CertificateModel.store(certificate).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const updateCertificate = async ({ dispatch }, certificate) => {
    fireLoadingSpinner('updating_module')
    return new Promise((resolve, reject) => {
        CertificateModel.update(certificate.id, certificate).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const destroyCertificate = ({ commit }, id) => {
    fireLoadingSpinner('deleting_module')
    return new Promise((resolve, reject) => {
        CertificateModel.destroy(id).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const bulkDestroyCertificates = ({ commit }, ids) => {
    fireLoadingSpinner('deleting_module')
    return new Promise((resolve, reject) => {
        CertificateModel.bulk_destroy(ids).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const importCsv = async ({ commit }, certificates) => {
    fireLoadingSpinner('importing_module')
    return new Promise((resolve, reject) => {
        CertificateModel.importCSV(certificates).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                commit('SET_ERROR', error.response.data.payload.errors, { root: true })
                Loading.hide();
                reject(error);
            });
    })
};

export const fetchOptions = ({ commit }) => {
    return new Promise((resolve, reject) => {
        CertificateModel.options().then(res => {
            commit('SET_OPTIONS', res.data)
            resolve(res);
        })
            .catch(error => {
                reject(error);
            });
    })
};

export const exportPdf = ({ commit }, id) => {
    fireLoadingSpinner('exporting_pdf')
    return new Promise((resolve, reject) => {
        CertificateModel.exportPDF(id).then(res => {
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `test.pdf`);
            document.body.appendChild(link);
            link.click();
            fireSuccessNotify(res, t('messages.downloaded_successfully'))
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};