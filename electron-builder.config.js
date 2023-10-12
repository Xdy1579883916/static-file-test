/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist/electron',
  },
  publish: null,
  npmRebuild: false,
  files: [
    'dist/main/**/*',
    'src/main/proto/wss.proto',
    'dist/main/proto/wss.proto',
    'dist/preload/**/*',
    'dist/render/**/*',
  ],
}

module.exports = config
