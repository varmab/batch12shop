import React, {Component} from 'react'
import Book from './Book';

class BookList extends Component{
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    addToWishlistOfBooklist=(book)=>{
        console.log(book)
        this.props.addToWishlist1(book);
    }

    render(){
        return(
            <div>
                <h1>BookList</h1>
                {
                    this.state.books.map((book)=>{
                        return <Book key={book.id} book={book} addToWishlist2={this.addToWishlistOfBooklist}/>
                    })
                }
            </div>
        )
    }
}

export default BookList;