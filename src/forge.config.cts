// @ts-ignore
import pkg from './package.json'

const config = {
  packagerConfig: {
    asar: true,
    executableName: 'vite-app',
    name: `vite-app-v${pkg.version}`,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        exe: 'vite-app.exe',
        setupExe: `vite-app-v${pkg.version}-setup.exe`,
      },
    },
    {
      name: '@electron-forge/maker-zip',
    },
  ],
  plugins: [],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Jleguim',
          name: 'vite-app',
        },
        draft: true,
      },
    },
  ],
}

export default config
