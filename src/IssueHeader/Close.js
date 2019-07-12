import React from "react";
import IssuesList from "../issueData/issuelist"

class Close extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "close"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault()  
        console.log("inside handleClick of close")
        this.props.closedData(this.state.filter)       
    }

    render(){
        console.log("inside close component" , this.props)
        return (
            <span className="open">
                <a href="" className="open-close" onClick={this.handleClick}>Close</a>
            </span>
             
        );
    }
}

export default Close;