import {test,expect} from "playwright/test"

test("should navigate to wishlist page and render correct text", async ({page})=>{
    await page.goto("http://localhost:5173/");
    const wishListIcon = page.getByTestId("favorite-icon");
    await wishListIcon.click();
    await expect(page).toHaveURL("http://localhost:5173/wishlist");
    await expect(page.locator("h1")).toHaveText(/Zaloguj się/i);
})

test("should navigate to wishlist page and render correct text if user is logged",async ({page}) => {
    await page.goto("http://localhost:5173/");

    // Kliknięcie ikony konta
    const accountIcon = page.getByTestId("account-icon");
    await accountIcon.click();
    
    // Wybranie opcji logowania
    const loginOption = page.getByTestId("login-option");
    await loginOption.click();
    
    // Wypełnianie formularza logowania
    const emailInput = page.getByTestId("email");
    const passwordInput = page.getByTestId("password");
    const btnLogin = page.getByRole("button", { name: "Zaloguj się" });
    await emailInput.fill("snixulele@gmail.com");
    await passwordInput.fill("mariusz99");
    
    // Kliknięcie przycisku logowania i oczekiwanie na nawigację
    await Promise.all([
        btnLogin.click(),
        page.waitForNavigation(), // Czekanie na nawigację po zalogowaniu
    ]);
    
    // Kliknięcie ikony listy ulubionych i oczekiwanie na nawigację
    const wishListIcon = page.getByTestId("favorite-icon");
    await Promise.all([
        wishListIcon.click(),
        page.waitForURL("http://localhost:5173/wishlist"), // Oczekiwanie na adres URL
    ]);

    // Sprawdzenie, czy strona listy ulubionych zawiera poprawny tekst
    const wishlistHeader = page.locator("h1");
    await expect(wishlistHeader).toHaveText(/Lista ulubionych/i);
})