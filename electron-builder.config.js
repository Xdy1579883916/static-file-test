/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  // asar: false, // 是否使用 asar 压缩：如果你不清楚最后 files 字段的复制结果，可以先关闭压缩，去g构建结果的 resources 目录查看
  directories: {
    output: 'dist/electron',
  },
  publish: null,
  npmRebuild: false,
  files: [
    'dist/main/**/*',
    'dist/preload/**/*',
    'dist/render/**/*',
    {
      from: 'src/main/proto',
      to: 'proto',
    },
  ],
}

module.exports = config
