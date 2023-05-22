import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //
    },
  },
  defaultCommandTimeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 720,
  // screenshotOnRunFailure: true,
  // videoUploadOnPasses: true,
  // video: true,
  // videoCompression: false
})