import React, {Component} from 'react'

const Friend=(props)=>{
    return (<div>
                <img src="someimage.png"></img>
                {props.name}
                {props.children}
                <p>Birth Date:{props.dateOfBirth}</p>
            </div>)
}

class Friends extends Component{
    constructor(){
        super();

        this.state={
            friends:["Ram","Robert","Rahim"]
        }
    }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.friends.map((friend)=>{
                            return (<Friend name={friend}>Thank you</Friend>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Friends;