import React, {Component} from 'react'

class Friends extends Component{
    constructor(){
        super();

        this.state={
            friends:["Ram","Robert","Rahim"]
        }
    }

    deleteFriend=(friend)=>{
        this.setState({
            friends:this.state.friends.filter((f)=>{
                return f!=friend;
            })
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.friends.map((friend)=>{
                            return <li key={friend}>{friend}<button onClick={()=>{ this.deleteFriend(friend);}}>Delete</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Friends;