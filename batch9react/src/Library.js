import React, {Component} from 'react'
import BookList from './BookList';

class Library extends Component{
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:"JS Fundamentals"
            },
            {
                id:2,
                title:"HTML Fundamentals"
            },
            {
                id:3,
                title:"React Fundamentals"
            }
        ]

        this.state={
            books:books,
            wishlist:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(book)
        this.setState({
            wishlist:[
                ...this.state.wishlist,
                book
            ]
        })
    }

    render(){
        return(
            <div>
                <h1>Library</h1>
                <p>My wishlist:{this.state.wishlist.length}</p>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
            </div>
        )
    }
}

export default Library;