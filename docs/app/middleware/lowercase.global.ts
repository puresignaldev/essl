export default defineNuxtRouteMiddleware((to) => {
  const lower = to.path.toLowerCase()
  if (lower !== to.path) {
    return navigateTo(lower, { replace: true })
  }
})
