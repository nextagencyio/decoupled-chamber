import { test, expect } from '@playwright/test'

test.describe('Chamber of Commerce - Non-Demo Mode', () => {
  test('homepage loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Chamber of Commerce/)
    await expect(page.locator('text=Strengthening Business')).toBeVisible()
  })

  test('homepage displays stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=650+')).toBeVisible()
  })

  test('homepage displays CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Join the Chamber Today')).toBeVisible()
  })

  test('directory page loads with member businesses', async ({ page }) => {
    await page.goto('/directory')
    await expect(page.locator('h1')).toContainText('Member Businesses')
    await expect(page.locator('text=Riverstone Brewing Company').first()).toBeVisible()
  })

  test('member business detail page loads', async ({ page }) => {
    await page.goto('/directory/riverstone-brewing-company')
    await expect(page.locator('h1:has-text("Riverstone Brewing Company")')).toBeVisible()
    await expect(page.getByText('Food & Beverage', { exact: true }).first()).toBeVisible()
  })

  test('events page loads with events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.locator('text=Business Luncheon').first()).toBeVisible()
  })

  test('event detail page loads', async ({ page }) => {
    await page.goto('/events/business-luncheon-april')
    await expect(page.locator('text=Economic Outlook 2026').first()).toBeVisible()
  })

  test('resources page loads with resources', async ({ page }) => {
    await page.goto('/resources')
    await expect(page.locator('h1')).toContainText('Resources')
    await expect(page.locator('text=Starting a Business').first()).toBeVisible()
  })

  test('news page loads with articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.locator('text=Small Business Week').first()).toBeVisible()
  })

  test('about page loads via slug routing', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('Riverside Chamber of Commerce')
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Member Businesses' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Events' }).first()).toBeVisible()
  })
})
