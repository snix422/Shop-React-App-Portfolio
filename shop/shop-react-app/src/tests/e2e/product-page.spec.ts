import {test,expect} from "playwright/test"

test("should navigate to product page and correct render title", async ({page}) => {
    await page.goto("http://localhost:5173/");
    await page.waitForLoadState('networkidle');

    const bestsellersList = await page.getByTestId("bestsellers-list")

    const productCardBarcelona = await bestsellersList.locator('div:has(h3:has-text("Barcelona"))');
    console.log(productCardBarcelona);
    await expect(productCardBarcelona).toBeVisible();

    await page.pause();

    const btnDetails = await productCardBarcelona.locator("button", {hasText:"Pokaż szczegóły"});
    await expect(btnDetails).toBeVisible();
    await btnDetails.click();

    await expect(page).toHaveURL("http://localhost:5173/product/koszulka-fc-barcelona-home-2024");

    const titleProduct = await page.locator("h1", {hasText: /Barcelona/i});
    await expect(titleProduct).toBeVisible();

})