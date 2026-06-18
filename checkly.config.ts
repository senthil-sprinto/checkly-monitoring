import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'checkly-monitoring',
  logicalId: 'checkly-monitoring',

  checks: {
    frequency: 15,

    locations: [
      'us-east-1',
      'eu-central-1'
    ],

    runtimeId: '2025.04',

    // Look for .check.ts files anywhere in the repo
    checkMatch: '**/*.check.ts',

    playwrightConfig: {
      timeout: 60000,

      use: {
        baseURL: 'https://sprinto.com',

        viewport: {
          width: 1440,
          height: 1200,
        },
      },
    },

    browserChecks: {
      // Your spec file is inside checks/
      testMatch: 'checks/**/*.spec.ts',
    },
  },

  cli: {
    runLocation: 'eu-central-1',

    reporters: ['list'],

    retries: 0,
  },
})

export default config