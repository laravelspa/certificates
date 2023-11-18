const moduleRoutes = {
  path: "/certificates",
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'certificate.list',
      component: () => import('./views/List.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'certificate',
        permissions: ['list-certificate']
      },
    },
    {
      path: 'create',
      name: 'certificate.create',
      component: () => import('./views/Create.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'certificate.create',
        permissions: ['create-certificate']
      },
    },
    {
      path: ':id/edit',
      name: 'certificate.edit',
      component: () => import('./views/Edit.vue'),
      meta: {
        layout: 'content',
        auth: true,
        title: 'certificate.edit',
        permissions: ['edit-certificate', 'show-certificate']
      },
    },
    {
        path: 'import',
        name: 'certificate.import',
        component: () => import('./views/Import.vue'),
        meta: {
          layout: 'content',
          auth: true,
          title: 'certificate.import_csv',
          permissions: ['import-file-certificate']
        },
      },
      {
        path: ':id/pdf',
        name: 'certificate.pdf',
        component: () => import('./views/Pdf.vue'),
        meta: {
          layout: 'content',
          auth: true,
          title: 'certificate.pdf',
          // permissions: ['edit-certificate', 'show-certificate']
        },
      },
  ]
};

export default router => {
  router.addRoute(moduleRoutes)
}
