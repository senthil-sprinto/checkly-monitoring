import { test } from '@playwright/test'

test('Generate baseline', async ({ page }) => {
  await page.goto('https://www.sprinto.com/lp/demo-testing/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  })

  await page.waitForTimeout(5000)

  await page.screenshot({
    path: 'baseline-from-checkly.png',
    fullPage: true,
  })
})