import { chromium } from '@playwright/test'

async function createBaseline() {
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 1200
    }
  })

  await page.goto('https://sprinto.com/lp/demo-testing/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  })

  await page.waitForTimeout(5000)

  await page.screenshot({
    path: './visual-baselines/main-demo-landing-page.png',
    fullPage: true
  })

  await browser.close()
}

createBaseline()