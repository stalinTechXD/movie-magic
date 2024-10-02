import React from "react";

class MovieCard extends React.Component {


    render() {
        const {title  , plot , price , rating , stars , fav , addCart } = this.props.movies;
        console.log(this.props.movies);
        return (

            <div className="main">
                <div className ="movie-card">
                    <div className="left">
                        <img alt="Poster" src='https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF1000,1000_QL80_.jpg' /> 
                    </div>

                    <div className="right">
                        <div className="title"> 
                            {title}
                        </div>
                        <div className="plot"> 
                            {plot}
                        </div>
                        <div className="price">
                            Rs. {price}
                        </div>
                        <div className = "footer">
                            <div className = "rating">
                                {rating}
                            </div>
                            <div className = "star-dis">
                                   
                                  <img  className="str-btn" alt="decrease" src = "https://cdn-icons-png.flaticon.com/128/10233/10233691.png" onClick={() => {this.props.removeStars(this.props.movies)} }
                                  />
                                    <img alt="star" className="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img  className="str-btn" alt="increase" src = "https://cdn-icons-png.flaticon.com/128/9210/9210955.png" onClick={ () => {this.props.addStars(this.props.movies)} }/>
                                <span className="startCount">{stars}</span>
                            </div>
                            <div className="favourite-btn-bg"> 
                               { 
                               fav ? <button className="favourite-btn" onClick = {() => {
                                console.log(this.props);
                                this.props.favourite(this.props.movies)}}  >
                                    Favorite
                                </button> : <button className="favourite-btn" onClick = {() => { this.props.favourite(this.props.movies)}} >
                                   Un-Favorite
                                </button>} 
                               
                            </div>
                            <div className="cart-btn-bg">
                               { addCart ? <button className="cart-btn" onClick = { () => { 
                                console.log(this.props);
                                this.props.handleCart(this.props.movies)}}>
                                      Remove From Cart
                                </button> : <button className="cart-btn" onClick = { () => { this.props.handleCart(this.props.movies)}}>
                                Add to Cart
                                </button>} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;