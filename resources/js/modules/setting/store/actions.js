import { fireLoadingSpinner, fireSuccessNotify } from '../../../utils/notify';
import Setting from '../../../models/Setting'
const SettingModel = new Setting('settings')

import i18n from "../../../i18n";
const { t } = i18n.global

export const fetchSystemSettings = ({ commit }) => {
    commit('SET_LOADING', true, { root: true })
    return new Promise((resolve, reject) => {
        SettingModel.list().then(res => {
            commit('SET_SYSTEM_SETTINGS', res.data)
            commit('SET_SYSTEM_NAME')
            commit('SET_LOADING', false, { root: true })
            resolve(res);
        })
            .catch(error => {
                commit('SET_LOADING', false, { root: true })
                reject(error);
            });
    })
};

export const createOrUpdate = ({ commit }, setting) => {
    fireLoadingSpinner('updating_module')
    return new Promise((resolve, reject) => {
        SettingModel.createOrUpdate(setting).then(res => {
            fireSuccessNotify(res, t('messages.settings_updated'))
            commit('SET_SYSTEM_SETTINGS', res.payload)
            commit('SET_SYSTEM_NAME')
            resolve(res);
        })
            .catch(error => {
                reject(error);
            });
    })
};

