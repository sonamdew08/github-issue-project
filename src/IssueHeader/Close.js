import React from "react";

class Close extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "close",
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault()  
        console.log("inside handleClick of close")
        this.setState({active: !this.state.active})
        this.props.closedData(this.state.filter)       
    }

    render(){
        console.log("inside close component" , this.props)
        return (
            <span className="open">
                <a href="" className={this.state.active? 'selected open-close': 'open-close'} onClick={this.handleClick}>Close</a>
            </span>
             
        );
    }
}

export default Close;