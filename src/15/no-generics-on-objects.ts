const makeConfigObj = (config: unknown) => {
  return config
}

export const configObj = makeConfigObj({
  routes: ['/', '/about', '/contact'],
  fetchers: {
    // @ts-expect-error
    '/does-not-exist': () => {
      return {}
    },
  },
})
