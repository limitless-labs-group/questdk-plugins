/** @type {import('vite').UserConfig} */
export default {
  build: {
    // rollupOptions: {
    //   external: ['@traderjoe-xyz/sdk-v2'],
    // },
    lib: {
      entry: 'src/index.ts',
      emptyOutDir: false,
      name: 'QuestdkPluginLimitlessExchange',
      fileName: (module, name) => {
        const outPath = `${module === 'es' ? 'esm' : 'cjs'}/${
          name.startsWith('index') ? 'index.js' : name + '/index.js'
        }`
        return outPath
      },
    },
  },
}
