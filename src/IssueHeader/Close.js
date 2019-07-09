import React from "react";
import IssuesList from "../issueData/issuelist"

class Close extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false, 
            state: ""
        }
    }
    handleClick(event){
        event.preventDefault()
        this.setState({open: true, state: "close"})
    }

    render(){
        return (            
            <span className="open">
                <a href="" className="open-close" onClick={this.handleClick}>Close</a>
                {this.state.open? <IssuesList open={this.state.open}/>: ""}
            </span>
        );
    }
}

export default Close;