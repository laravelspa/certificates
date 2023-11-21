import store from '../store';

export const addTo = (array, key, value) => {
    array[key].push({ ...value });
}

export const removeFrom = (array, key, i) => {
	array[key].splice(i, 1);
}

export const hasPermission = (requiredPermissions) => {
	const permissions = store.getters && store.getters['auth/Permissions'];

    return permissions.some(permission => {
        return requiredPermissions.includes(permission);
    });
}

export const canAccess = (to) => {
	const guard = to.meta.permissions
	
	if (guard && guard instanceof Array && guard.length > 0) {
	    const hasAccess 	 = hasPermission(guard)
        
        if (!hasAccess) return false 
    }

    return true
}