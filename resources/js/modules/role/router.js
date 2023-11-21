const moduleRoutes = {
  path: "/roles",
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'role.list',
      component: () => import('./views/List.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'role',
        permissions: ['list-role']
      },
    },
    {
      path: 'create',
      name: 'role.create',
      component: () => import('./views/Create.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'role.create',
        permissions: ['create-role']
      },
    },
    {
      path: ':id/edit',
      name: 'role.edit',
      component: () => import('./views/Edit.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'role.edit',
        permissions: ['edit-role', 'show-role']
      },
    },
  ]
};

export default router => {
  router.addRoute(moduleRoutes)
}
