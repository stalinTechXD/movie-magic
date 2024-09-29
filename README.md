# Movie magic

A React web application that displays a list of movies and allows users to add stars, remove stars, add movies to their favorites list, and add movies to their cart. The application also features a navigation bar with a bell button that shows the cart count.

## Features

- **Display Movies**: View a list of movies.
- **Add/Remove Stars**: Rate movies by adding or removing stars.
- **Add to Favorites**: Save your favorite movies.
- **Add to Cart**: Add movies to your cart.
- **Cart Count**: View the number of movies in your cart via a bell button in the navigation bar.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/cine-spotlight.git
    cd cine-spotlight
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Visit `http://localhost:3000` to view the application.

## Project Structure

- `public/`: Contains static files such as `index.html`.
- `src/`: Contains the main source code for the application.
  - `components/`: Contains the React components.
  - `App.js`: The main component that ties everything together.
  - `index.js`: The entry point of the application.

## Components

### App.js
- The main component of the application that renders the `Navbar`, `MovieList`, and `Cart` components.

### Navbar.js
- Renders the navigation bar with a bell button that shows the cart count.

### MovieList.js
- Fetches and displays a list of movies.

### MovieItem.js
- Represents an individual movie item with options to add/remove stars, add to favorites, and add to cart.

### Cart.js
- Displays the movies that have been added to the cart.

## Usage

Open the application in your browser and you can:
- Click on stars to add or remove ratings for a movie.
- Click on the heart icon to add a movie to your favorites list.
- Click on the shopping cart icon to add a movie to your cart.
- Check the cart count through the bell button in the navigation bar.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project by opening issues or creating pull requests.
