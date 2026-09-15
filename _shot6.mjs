import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 1400 } });
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle' });

const proj = page.locator('#projects');
await proj.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
const firstProjectCard = page.locator('#projects [role="button"]').first();
await firstProjectCard.click();
await page.waitForTimeout(400);
await page.screenshot({ path: '_project_arch.png' });
await page.keyboard.press('Escape');
await page.waitForTimeout(300);

const saas = page.locator('#saas-products');
await saas.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
const firstProductCard = page.locator('#saas-products [role="button"]').first();
await firstProductCard.click();
await page.waitForTimeout(400);
await page.screenshot({ path: '_product_arch.png' });

await browser.close();
console.log('DONE');
