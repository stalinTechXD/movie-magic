import React from "react";

class Navbar extends React.Component {

    render () {
        return(       
            <>
             <div className="navbar">
                <div className="titlbar">Movie Magic</div>
                <div className="cartContainer">
                    <img className = "cartIcon" src="https://cdn-icons-png.flaticon.com/128/2121/2121815.png" alt = "carticon" /> 
                    <span className="cartCount"> {this.props.cartCount}</span>
                </div>
             </div>
            </>
        )
    }
}

export default Navbar;