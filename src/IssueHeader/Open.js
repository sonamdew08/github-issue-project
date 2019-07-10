import React from "react";
import IssuesList from "../issueData/issuelist"

class Open extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false, issues: [], openedIssue:[], fetch: false
        }
        
        console.log("Inside open constructor")
        console.log(this.state)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault()
        if(!this.state.open){
            this.setState({issues: this.props.issue, open: true})
        }
        if(this.state.issues.length > 0){
            this.setState({openedIssue : this.state.issues.filter((item) => (item.state === 'open'))})
        }
        
    }

    render(){
        // console.log("inside open component" , this.props)
        return (
            <span className="open">
                <a href="" className="open-close" onClick={this.handleClick}>Open</a>
                {this.state.open?<IssuesList data={this.state.openedIssue} fetch={this.state.fetch}/>:""}
            </span>
             
        );
    }
}

export default Open;