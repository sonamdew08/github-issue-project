import React from "react";
import IssuesList from "../issueData/issuelist"

class Open extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false, state: ""
        }
        console.log("Inside open constructor")
        console.log(this.state)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault()
        this.setState({open: true, state: "open"})
    }

    render(){
        // console.log("inside open component" , this.props)
        return (
            <span className="open">
                <a href="" className="open-close" onClick={this.handleClick}>Open</a>
                {this.state.open? <IssuesList open={this.state.open} state={this.state.state}/>: ""}
            </span>
             
        );
    }
}

export default Open;