import React from "react";
import MovieCard from "./Moviecard";


class MovieLists extends React.Component {
   

    render() {
        const { movies , addStars , decStars , toggleFav ,toggleCart } = this.props;
        
        return (
            <>
                {movies.map((movie) => (
                    <MovieCard  movies={movie}  addStars = {addStars} removeStars = {decStars} favourite = {toggleFav} handleCart = {toggleCart} key = {movies.id} />
                ))}
            </>
        )
    }
}

export default MovieLists;
