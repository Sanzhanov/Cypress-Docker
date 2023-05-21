import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //
    },
  },
  retries: {
    runMode: 1,
    openMode: 1,
  },
  defaultCommandTimeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotOnRunFailure: true,
  videoUploadOnPasses: false,
  video: true,
  videoCompression: false
})