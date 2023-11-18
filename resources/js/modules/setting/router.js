const moduleRoutes = {
    path: "/settings",
    component: () => import('./Module.vue'),
    children: [
        {
            path: '',
            name: 'settings.list',
            component: () => import('./views/index.vue'),
            meta: {
                layout: 'content',
                auth: true,
                title: 'setting',
                permissions: ['list-setting']
            }
        },
        {
            path: 'global',
            name: 'settings.system',
            component: () => import('./views/system.vue'),
            meta: {
                layout: 'content',
                auth: true,
                title: 'system_settings',
                permissions: ['list-system-setting']

            }
        }
    ]
};

export default router => {
    router.addRoute(moduleRoutes)
}
