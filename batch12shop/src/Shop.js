import React from 'react'
import './Shop.css'
import Catalog from './Catalog';
import Cart from './Cart';
import Checkout from './Checkout';

class Shop extends React.Component{
    constructor(){
        super();

        var myItems=[
            {
                id:1,
                name:"Shirt",
                price:100
            },
            {
                id:2,
                name:"Pant",
                price:100
            },
            {
                id:3,
                name:"Short",
                price:100
            }
        ]

        this.state={
            items:myItems,
            cartItems:[],
            orderTotal:0
        }
    }

    addItemToCart=(item)=>{
        console.log(JSON.stringify(item))

        var isItemExistInCart=this.state.cartItems.some(function(cartItem){
            return cartItem.id==item.id
        })

        if((isItemExistInCart==true)){
            //item exists in cart alread

            //filter out to remove first and add again
            // with new qty

            var existingItem=this.state.cartItems.find((cartItem)=>{
                return cartItem.id==item.id
            })

            this.setState({
                cartItems:this.state.cartItems.filter((cartItem)=>{
                    return cartItem.id!=item.id
                })
            },()=>{
                if(existingItem){
                    existingItem.qty++;

                    this.setState({
                        cartItems:[
                            ...this.state.cartItems,
                            existingItem
                        ]
                    },()=>{
                        this.setState({
                            orderTotal:this.state.cartItems.reduce((total,item)=>{
                                return total+item.price*item.qty;
                            },0)
                        })
                    })
                }

            })
        }
        else
        {
            item.qty=1;
            this.setState({
                cartItems:[
                    ...this.state.cartItems,
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,item)=>{
                        return total+item.price*item.qty;
                    },0)
                })
            })
        }

        
    }

    removeFromCart=(item)=>{
        console.log(JSON.stringify(item))
        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem.id!=item.id
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce((total,item)=>{
                    return total+item.price*item.qty;
                },0)
            })
        })
    }

    render(){
        return(
            <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={this.state.items} addItemToCart={this.addItemToCart}/>
                </div>
                <div className="column">
                    <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                    <Checkout orderTotal={this.state.orderTotal} />
                </div>
            </div>
        )
    }
}

export default Shop;