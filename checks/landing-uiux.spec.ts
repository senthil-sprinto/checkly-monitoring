import { test, expect } from '@playwright/test'

test('Main Demo Landing Page', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 })

  await page.goto('https://www.sprinto.com/lp/demo-testing/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  })

  await page.waitForTimeout(5000)

  await expect(page.locator('body')).not.toContainText('Verify you are human')
  await expect(page.locator('body')).not.toContainText('Performing security verification')

  await expect(page).toHaveScreenshot('main-demo-landing-page.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
    timeout: 60000,
  })
})