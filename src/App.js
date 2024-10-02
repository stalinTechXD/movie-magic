
import MovieLists from "./MovieLists";
import Navbar from "./Navbar";
import React from "react";
import {movies} from './moviesdata'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        movies: movies,
        cartCount : 0
    }
}
handleIncStar = (movie) => {
    const {movies} = this.state;
    const mid =  movies.indexOf(movie);
    if(movies[mid].stars  >=5)
    {
        return;
    }
    movies[mid].stars += 0.5;

    this.setState({
        movies : movies
    })
}

handleDescStar = (movie) => {
    const {movies} = this.state;
    const mid =  movies.indexOf(movie);
    // check before decremeting that is should not go below 0
    if(movies[mid].stars <=0)
    {
        return;
    }
    movies[mid].stars -= 0.5;

    this.setState({
        movies : movies
    })
}

handleFavourite = (movie) => 
{
    const {movies} = this.state;
    const mid =  movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState(
        {
            movies : movies
        }
    )
}

handleCart = (movie) => {

    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    const updatedMovies = [...movies];
    updatedMovies[mid].addCart = !updatedMovies[mid].addCart;

    this.setState((prevState) => ({
      movies: updatedMovies,
      cartCount: updatedMovies[mid].addCart ? prevState.cartCount + 1 : prevState.cartCount - 1
    }));

    console.log(this.state.cartCount);
}
 render() {
  const {movies , cartCount} = this.state;
  return (
    <>
    <Navbar  cartCount = {cartCount}/>
    <MovieLists movies = {movies} addStars = {this.handleIncStar} decStars = {this.handleDescStar} toggleFav = {this.handleFavourite} toggleCart = {this.handleCart}/>
    </>
  );
}
}

export default App;
