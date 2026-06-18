# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checks/landing-uiux.spec.ts >> Main Demo Landing Page
- Location: checks/landing-uiux.spec.ts:3:5

# Error details

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('body')
Expected substring: not "Performing security verification"
Received string: "sprinto.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for sprinto.com to respondRay ID: a0d9ec6afdbf460fPerformance and Security by CloudflarePrivacy"
Timeout: 5000ms

Call log:
  - Expect "not toContainText" with timeout 5000ms
  - waiting for locator('body')
    14 × locator resolved to <body>…</body>
       - unexpected value "sprinto.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for sprinto.com to respondRay ID: a0d9ec6afdbf460fPerformance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - heading "sprinto.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a0d9ec6afdbf460f
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('Main Demo Landing Page', async ({ page }) => {
  4  |   await page.setViewportSize({
  5  |     width: 1440,
  6  |     height: 1200,
  7  |   })
  8  | 
  9  |   await page.goto('https://sprinto.com/lp/demo-testing/', {
  10 |     waitUntil: 'domcontentloaded',
  11 |     timeout: 60000,
  12 |   })
  13 | 
  14 |   await page.waitForTimeout(5000)
  15 | 
  16 |   // Confirm actual page loaded, not Cloudflare challenge
  17 |   await expect(page.locator('body')).not.toContainText(
  18 |     'Verify you are human'
  19 |   )
  20 | 
> 21 |   await expect(page.locator('body')).not.toContainText(
     |                                          ^ Error: expect(locator).not.toContainText(expected) failed
  22 |     'Performing security verification'
  23 |   )
  24 | 
  25 |   await expect(page).toHaveScreenshot(
  26 |     'main-demo-landing-page.png',
  27 |     {
  28 |       fullPage: true,
  29 |       maxDiffPixelRatio: 0.01,
  30 |       timeout: 60000,
  31 |     }
  32 |   )
  33 | })
```