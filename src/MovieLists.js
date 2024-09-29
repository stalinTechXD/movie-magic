import React from "react";
import MovieCard from "./Moviecard";


class MovieLists extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    id : 1,
                    title: "This avengers",
                    plot: "Supernatural powers shown in the movie.",
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    addCart: false
                },
                {
                    id: 2,
                    title: "Guardians of the Galaxy",
                    plot: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
                    price: 159,
                    rating: 8.2,
                    stars: 0,
                    fav: false,
                    addCart: false
                },
                {
                    id : 3,
                    title: "Iron Man",
                    plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                    price: 180,
                    rating: 8.5,
                    stars: 0,
                    fav: false,
                    addCart: false
                },
                {
                    id : 4,
                    title: "Thor",
                    plot: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
                    price: 170,
                    rating: 7.9,
                    stars: 0,
                    fav: false,
                    addCart: false
                },
                {
                    id: 5,
                    title: "Black Panther",
                    plot: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
                    price: 190,
                    rating: 7.3,
                    stars: 0,
                    fav: false,
                    addCart: false
                },
                {
                    id : 6,
                    title: "Doctor Strange",
                    plot: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
                    price: 175,
                    rating: 7.5,
                    stars: 0,
                    fav: false,
                    addCart: false
                }
            ]
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

        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].addCart = !movies[mid].addCart;

        this.setState(
            {
                movies : movies
            }
        )
    }

  

    render() {
        const { movies } = this.state;
        return (
            <>
                {movies.map((movie, index) => (
                    <MovieCard  movies={movie}  addStars = {this.handleIncStar} removeStars = {this.handleDescStar} favourite = {this.handleFavourite} handleCart = {this.handleCart} key = {movies.id} />
                ))}
            </>
        )
    }
}

export default MovieLists;
