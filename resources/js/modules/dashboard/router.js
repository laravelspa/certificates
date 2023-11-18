const moduleRoutes = {
  path: "",
  component: () => import('./Module.vue'),
  meta: {
    auth: true,
  },
  children: [
    {
      path: '',
      name: 'dashboard',
      component: () => import('./views/Home.vue'),
      meta: {
        layout: 'content',
        title: 'dashboard',
        auth: true,
      }
    }
  ]
};

export default router => {
  router.addRoute(moduleRoutes)
}
