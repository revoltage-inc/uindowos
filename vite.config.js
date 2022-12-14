import { defineConfig } from 'vite'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true })],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './src/assets/'),
      '@components': resolve(__dirname, './src/components/'),
      '@libs': resolve(__dirname, './src/libs/'),
    },
  },
  // HACK: STORYBOOK environment variable is not working, so set
  // https://github.com/storybookjs/storybook/pull/12997
  define: {
    'process.env.STORYBOOK': true,
  },
})
