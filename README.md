### Installation

Follow these steps to set up the project:

1. Clone the repo
```sh
  https://github.com/snix422/Gaming-Shop-App.git
```
2. Navigate to your project directory
```sh
  cd Gaming-Shop-App
```

3. Install yarn packages
```sh
  npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="usage"></a>
## Usage

To run the project locally, use the following command:

```sh
  npm start
```

## Built With
- React
- Redux
- Axios
- Tanstack React Query
- React Hook Form
- TypeScript
- Zod
- Vitest
- React Testing Library
- Playwright
- Firebase
- Custom hooks
- React toastify


# Football Shirt Store

Your football jersey e-commerce app is built with React and TypeScript, utilizing Redux Toolkit for state management and TanStack React Query for efficient API data fetching, caching, and optimistic updates.
It features product filtering, shopping cart management, and user reviews, all with strict validation using Zod. Testing is robust, using Vitest for unit tests, React Testing Library for component testing, and Playwright for end-to-end scenarios. 
The app is well-structured, with clear separation of concerns in folders like libs for utilities and api for backend communication.


## Features

- Add to Cart Functionality: Users can add products to their shopping cart, manage quantities, and review cart contents before finalizing purchases.

- Product Filtering: The platform provides filtering options for products based on various criteria, facilitating users in finding items of interest.

- User Registration and Login: Users can create accounts, log in, and manage their profiles, ensuring a personalized shopping experience.

- Commenting System: Ability to add comments and reviews on products, allowing the community to share opinions and feedback.

- Adding Products to Favorites: Users can add products to their favorites list for easier retrieval and future purchases.

- Product category selection: Ability to browse products by league, streamlining platform navigation. Sorting products by price
  
- Product Page: Display the page for each product and display the product information and comments section

  ![Zdjęcie strony głównej aplikacji](https://i.imgur.com/h3wVfai.png)
  Widok strony głównej. Na stronie głównej znajduję się sekcja Popularne w której produkty są pobierane z backendu za pomocą json-server

  ![Strona sklepu](https://i.imgur.com/piaozLu.png).
  Zdjęcie przedstawia stronę z wszystkimi produktami

  ![Filtrowanie na podstronie z produktami](https://i.imgur.com/OGRpqCy.png).
  Na rysunku została przedstawiona podstrona z produktami wraz z przedstawionym filtrowaniem

  ![Zdjęcie przedstawia wyszukiwanie produktu po nazwie](https://i.imgur.com/wZMwWht.png).
  Zdjęcie przedstawia wyszukanie produktów po nazwie po wpisaniu frazy w input w headerze.

  ![Widok strony zdjęcie produktu](https://i.imgur.com/GWeBq9A.png).
  Widok strony produktu.

  ![Widok sekcji z opiniami o danym produkcie](https://i.imgur.com/lpCMv3L.png).
  Zdjęcie przedstawia sekcję z opiniami dla wybranego produktu. Tylko zalogowany użytkownik może dodać opinię. Widok przedstawia wygląd dla nie zalogowanego użytkownika.

  ![Widok rejestracji](https://i.imgur.com/JEar2M3.png).
  Na rysunku została przedstawiona strona rejestracyjna

  ![Widok logowania](https://i.imgur.com/dGNAuP3.png).
  Widok przedstawia logowanie użytkownika

  ![Widok logowania z walidacją](https://i.imgur.com/5XNnPjQ.png).
  Zdjęcie przedstawia formularza logowania z walidacją

  ![Widok koszyka](https://i.imgur.com/PO0slWX.png).
  Widok koszyka w sklepie z przykładowymi dodanymi produktami

  ![Widok Listy ulubionych](https://i.imgur.com/8o2wxm0.png).
  Zdjęcie przedstawia listy ulubionych produktów dla danego konta użytkownika

  ![Widok Listy ulubionych dla niezalogowanego użytkownika](https://i.imgur.com/qUhG8Q8.png).
  Zdjęcie przedstawia podstronę z listą ulubionych produktów, gdy użytkownik nie jest zalogowany

  ![Widok ładowania produktów](https://i.imgur.com/GKgCj46.png).
  Widok przedstawia placeholdery które są widoczne gdy trwa ładowanie produktów z bazy danych


## Link 

   [Link to project](https://tourmaline-nougat-fb3109.netlify.app/)
