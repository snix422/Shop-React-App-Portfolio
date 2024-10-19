import {test,expect} from "playwright/test"

test("should navigate to search page and render property label",async({page})=>{
    await page.goto("http://localhost:5173/");
    await page.waitForLoadState('networkidle');
    const textInput = "Barcelona"
    const searchInput = page.locator('[data-testid="search-input"] input');
    await page.waitForSelector('[data-testid="search-input"]');
    await searchInput.fill(textInput);
    await page.waitForURL("http://localhost:5173/search?query=Barcelona");
    const headingPhrase = page.locator("h1");
    await expect(headingPhrase).toHaveText(`Wyszukania dla: ${textInput}`)

    const productCardTitle = page.locator('h3', { hasText: textInput });
    await expect(productCardTitle).toBeVisible();
})