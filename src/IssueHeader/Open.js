import React from "react";

class Open extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "open",
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault()
        console.log("inside open click", event.target)
        this.setState({active: !this.state.active})
        this.props.openedData(this.state.filter)       
    }

    render(){
        // console.log("inside open component" , this.props)
        return (
            
            <a href="" className={this.state.active? 'selected open-close': 'open-close'} onClick={this.handleClick}>Open</a>
             
        );
    }
}

export default Open;