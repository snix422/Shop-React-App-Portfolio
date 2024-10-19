import {test,expect} from "@playwright/test"

test("should add product to shopping list and correctly render in aside and adjust quantity", async ({ page }) => {
    await page.goto("http://localhost:5173/product/koszulka-fc-barcelona-home-2024");

    // Wybór rozmiaru L
    const lSize = await page.locator('button:text-is("L")');
    await lSize.click();

    // Dodanie produktu do koszyka
    const btnAddToShoppingList = await page.locator('button:has-text("Dodaj do koszyka")');
    await btnAddToShoppingList.click();

    // Kliknięcie ikony koszyka
    const shoppingListIcon = await page.getByTestId("shoppingcart-icon");
    await shoppingListIcon.click();

    // Sprawdzenie, czy produkt Barcelona jest w koszyku
    const cartItemTitle = await page.locator('span').filter({ hasText: /Barcelona/i });
    await expect(cartItemTitle).toBeVisible();

    // Zwiększenie ilości produktu
    const addIcon = await page.getByTestId("AddIcon");
    await addIcon.click();
    await expect(page.getByTestId("quantity")).toHaveText("2");

    // Zmniejszenie ilości produktu
    const removeIcon = await page.getByTestId("RemoveIcon");
    await removeIcon.click();
    await expect(page.getByTestId("quantity")).toHaveText("1");
});

test("should add product to shopping list and remove item when delete icon is clicked", async({ page }) => {
    await page.goto("http://localhost:5173/product/koszulka-fc-barcelona-home-2024");

    const lSize = await page.locator('button:text-is("L")');
    await lSize.click();

    const btnAddToShoppingList = await page.locator('button:has-text("Dodaj do koszyka")');
    await btnAddToShoppingList.click();

    const shoppingListIcon = await page.getByTestId("shoppingcart-icon");
    await shoppingListIcon.click();

    const cartItemTitle = await page.locator('span').filter({ hasText: /Barcelona/i });
    await expect(cartItemTitle).toBeVisible();

    // Kliknięcie ikony usunięcia produktu
    const removeItemIcon = await page.getByTestId("DeleteForeverIcon");
    await removeItemIcon.click();

    // Sprawdzenie, czy produkt został usunięty
    await expect(page.locator('span').filter({ hasText: /Barcelona/i })).toHaveCount(0);
});