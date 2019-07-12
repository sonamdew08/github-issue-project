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

    componentDidUpdate(){
        if(!this.state.fetch){
            this.setState({issues: this.props.issue, fetch: true})
        }
        if(this.state.open){
            if(this.state.issues.length > 0){
                this.setState({openedIssue : this.state.issues.filter((item) => (item.state === 'open')), open: false})
                console.log("---openned Issue ---", this.state.openedIssue)
                this.props.openedData(this.state.openedIssue)
            }
        }
    }

    handleClick(event){
        event.preventDefault()  
        console.log("inside handleClick of open")
        console.log(this.state.issues)
        this.setState({open: true})        
    }

    render(){
        console.log("inside open component" , this.props)
        return (
            <span className="open">
                <a href="" className="open-close" onClick={this.handleClick}>Open</a>
                {/* {this.state.open?<IssuesList data={this.state.openedIssue} fetch={this.state.fetch}/>:""} */}
            </span>
             
        );
    }
}

export default Open;