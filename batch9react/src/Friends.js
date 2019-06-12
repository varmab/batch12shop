import React, {Component} from 'react'

const Friend=(props)=>{
    return (<div>
                {props.name}
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
                        this.state.friends.map((friend,index)=>{
                            return (<Friend key={index} name={friend}>Thank you</Friend>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Friends;