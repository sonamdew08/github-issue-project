import React from "react";
import IssuesList from "../issueData/issuelist"

class Close extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            close: false, issues: [], closedIssue:[], fetch: false
        }
        
        console.log("Inside open constructor")
        console.log(this.state)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault()
        if(!this.state.close){
            this.setState({issues: this.props.issue, close: true})
        }   
        if(this.state.issues.length > 0){
            this.setState({closedIssue : this.state.issues.filter((item) => (item.state === 'close'))})
            console.log(this.state.closedIssue)
        }
        
    }

    render(){
        return (            
            <span className="open">
                <a href="" className="open-close" onClick={this.handleClick}>Close</a>
                {/* {this.state.close?<IssuesList data={this.state.closedIssue} fetch={this.state.fetch}/>:""} */}
            </span>
        );
    }
}

export default Close;