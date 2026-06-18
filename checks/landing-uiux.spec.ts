import { test, expect } from '@playwright/test'
import fs from 'fs'
import { PNG } from 'pngjs'
import pixelmatch from 'pixelmatch'

test('Main Demo Landing Page', async ({ page }) => {

  await page.setViewportSize({
    width: 1440,
    height: 1200
  })

  await page.goto('https://sprinto.com/lp/demo-testing/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000
})

await page.waitForTimeout(5000)

  await page.screenshot({
    path: 'current.png',
    fullPage: true
  })

  const baseline = PNG.sync.read(
    fs.readFileSync(
      './visual-baselines/main-demo-landing-page.png'
    )
  )

  const current = PNG.sync.read(
    fs.readFileSync('./current.png')
  )

  const diff = new PNG({
    width: baseline.width,
    height: baseline.height
  })

  const diffPixels = pixelmatch(
    baseline.data,
    current.data,
    diff.data,
    baseline.width,
    baseline.height,
    { threshold: 0.1 }
  )

  const diffRatio =
    diffPixels /
    (baseline.width * baseline.height)

  console.log('Diff Ratio:', diffRatio)

  expect(diffRatio).toBeLessThan(0.03)
})