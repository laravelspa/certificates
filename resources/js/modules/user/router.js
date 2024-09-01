const moduleRoutes = {
  path: "/users",
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'user.list',
      component: () => import('./views/List.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'user',
        permissions: ['list-user']
      },
    },
    {
      path: 'create',
      name: 'user.create',
      component: () => import('./views/Create.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'user.create',
        permissions: ['create-user']
      },
    },
    {
      path: ':id/edit',
      name: 'user.edit',
      component: () => import('./views/Edit.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'user.edit',
        permissions: ['edit-user']
      },
    },
    {
        path: 'import',
        name: 'user.import',
        component: () => import('./views/Import.vue'),
        meta: {
          layout: 'content',
          auth: true,
          title: 'user.import_csv',
          permissions: ['import-file-user']
        },
      },
  ]
};

export default router => {
  router.addRoute(moduleRoutes)
}
