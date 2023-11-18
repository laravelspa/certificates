import { Loading } from "quasar";
import { fireErrorNotify, fireLoadingSpinner, fireSuccessNotify } from '../../../utils/notify';

import User from '../../../models/User'
const UserModel = new User('users')

export const fetchUsers = ({ commit }, options) => {
    commit('SET_LOADING', true, { root: true })
    return new Promise((resolve, reject) => {
        UserModel.list(options).then(res => {
            commit('SET_USERS', res.data)
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

export const fetchUser = ({ commit }, id) => {
    return new Promise((resolve, reject) => {
        UserModel.get(id).then(res => {
            commit('SET_USER', res.data)
            resolve(res);
        })
            .catch(error => {
                reject(error);
            });
    })
};

export const createUser = async (_, user) => {
    fireLoadingSpinner('creating_module')
    return new Promise((resolve, reject) => {
        UserModel.store(user).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const updateUser = async (_, user) => {
    fireLoadingSpinner('updating_module')
    return new Promise((resolve, reject) => {
        UserModel.update(user.id, user).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const destroyUser = (_, id) => {
    fireLoadingSpinner('deleting_module')
    return new Promise((resolve, reject) => {
        UserModel.destroy(id).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const bulkDestroyUsers = (_, ids) => {
    fireLoadingSpinner('deleting_module')
    return new Promise((resolve, reject) => {
        UserModel.bulk_destroy(ids).then(res => {
            fireSuccessNotify(res)
            resolve(res);
        })
            .catch(error => {
                fireErrorNotify(error)
                reject(error);
            });
    })
};

export const importCsv = async ({ commit }, users) => {
    fireLoadingSpinner('importing_module')
    return new Promise((resolve, reject) => {
        UserModel.importCSV(users).then(res => {
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
