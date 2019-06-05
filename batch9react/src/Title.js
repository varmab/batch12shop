import React, {Component} from 'react'

class Title extends Component{
    constructor(){
        super();

        this.state={
            like:false
        }
    }

    likeUnlike=()=>{
        this.setState({
            like:!this.state.like
        })
    }

    render(){
        return (
            <button onClick={this.likeUnlike}>
            {(this.state.like==true)? "Unlike": "Like"}
            </button>
        )
    }
}

export default Title;