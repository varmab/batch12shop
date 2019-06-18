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

    getFriendsList=()=>{
        var friends=''
        this.state.friends.forEach(function(friend,index){
            friends=friends+friend;
         })
         console.log(friends)
        return friends;
    }

    render(){
        return(
            <div>
                <ul>
                    {this.getFriendsList}
                </ul>
            </div>
        )
    }
}

export default Friends;