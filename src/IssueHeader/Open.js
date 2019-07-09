import React from "react";
import IssueList from "../issueData/issuelist"

class Open extends React.Component{

    handleClick(event){
        event.preventDefault()
        var id = document.getElementById('open')
        const keyvalue = "state"
        console.log("id", id.id)
        return <IssueList id={id.id} keyValue={keyvalue} />
    }

    render(){
        // console.log("inside open component" , this.props)
        return (
            <a href="" className="open-close" id="open" onClick={this.handleClick}>Open</a>
        );
    }
}

export default Open;