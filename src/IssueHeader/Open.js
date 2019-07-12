import React from "react";
import IssuesList from "../issueData/issuelist"

class Open extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "open"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault()  
        // console.log("inside handleClick of open")
        this.props.openedData(this.state.filter)       
    }

    render(){
        // console.log("inside open component" , this.props)
        return (
            <span className="open">
                <a href="" className="open-close" onClick={this.handleClick}>Open</a>
            </span>
             
        );
    }
}

export default Open;