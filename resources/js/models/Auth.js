import request from "../utils/request";

export function login(data) {
    return request({
        url: "/auth/login",
        method: "post",
        data: data
    });
}

export function logout() {
    return request({
        url: "/auth/logout",
        method: "post"
    });
}

export function profile() {
    return request({
        url: "/auth/profile",
        method: "get"
    });
}

export function profileUpdate(data) {
    return request({
        url: "/auth/profile",
        method: "post",
        data: data
    });
}

export function permissions() {
    return request({
        url: "/auth/permissions",
        method: "get"
    });
}
