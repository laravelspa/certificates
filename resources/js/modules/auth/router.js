const moduleRoutes = {
  path: "/",
  component: () => import('./Module.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        layout: 'blank',
        auth: false,
        title: 'login'
      }
    },
    {
      path: 'profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
      meta: {
        auth: true,
        layout: 'content',
        title: 'profile',
      }
    },
  ]
};

export default router => {
  router.addRoute(moduleRoutes)
}