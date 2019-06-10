import React, {Component} from 'react'

class GreetingCard extends Component{
    constructor(){
        super();

        this.state={
            name:'',
            greeting:''
        }
    }

    onNameChange=(e)=>{
        var name=e.target.value;
        this.setState({
            name:name
        })
    }

    generate=()=>{
        var greetings=[
            "Happy New Year",
            "Happy Birthday",
            "Happy Anniversary"
        ]

        var randomIndex=Math.floor(Math.random() * 2)
          
        this.setState({
           greeting: greetings[randomIndex] + ', ' + this.state.name 
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.onNameChange} name="name"/>
                <button onClick={this.generate}>Generate</button>
                <div>
                    <h1>{this.state.greeting}</h1>
                </div>
            </div>
        )
    }
}

export default GreetingCard;