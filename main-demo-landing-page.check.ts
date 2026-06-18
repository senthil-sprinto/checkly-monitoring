import { BrowserCheck, Frequency } from 'checkly/constructs'

new BrowserCheck('main-demo-landing-page', {
  name: 'Main Demo Landing Page - Visual Check',
  frequency: Frequency.EVERY_15M,
  locations: ['ap-south-1'],
  code: {
    entrypoint: './checks/landing-uiux.spec.ts',
  },
})