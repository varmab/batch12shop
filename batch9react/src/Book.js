import React, {Component} from 'react'

class Book extends Component{
    constructor(props){
        super(props);
        this.state={
            book:props.book
        }
    }

    addToWishlistOfBook=()=>{
        this.props.addToWishlist2(this.state.book)
    }

    render(){
        return(
            <div>
               <h1>{this.state.book.title}</h1>
               <button onClick={this.addToWishlistOfBook}>Add to wishlist</button>
            </div>
        )
    }
}

export default Book;