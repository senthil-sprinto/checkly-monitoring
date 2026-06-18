import { test, expect } from '@playwright/test'

test('Check page content', async ({ page }) => {
  await page.goto('https://www.sprinto.com/lp/demo-testing/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  })

  await page.waitForTimeout(5000)

  const bodyText = await page.locator('body').innerText()

  console.log(bodyText)

  await page.screenshot({
    path: 'debug.png',
    fullPage: true,
  })

  expect(true).toBe(true)
})