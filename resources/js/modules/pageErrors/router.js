const moduleRoutes = {
  path: "/cp",
  component: () => import('./Module.vue'),
  children: [
    {
      path: ":catchAll(.*)",
      name: '404',
      component: () => import('./views/404.vue'),
      meta: { layout: 'content' }
    },
    {
      path: "403",
      name: '403',
      component: () => import('./views/403.vue'),
      meta: { layout: 'content' }
    }
  ]
};

export default router => {
  router.addRoute(moduleRoutes)
}