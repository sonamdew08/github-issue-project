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

    componentDidUpdate(){
        if(!this.state.fetch){
            this.setState({issues: this.props.issue, fetch: true})
        }
        if(this.state.close){
            if(this.state.issues.length > 0){
                this.setState({closedIssue : this.state.issues.filter((item) => (item.state === 'close')), close: false})
                console.log("---closed Issue ---", this.state.closedIssue)
                this.props.closedData(this.state.closedIssue)
            }
        }
    }

    handleClick(event){
        event.preventDefault()  
        console.log("inside handleClick of open")
        console.log(this.state.issues)
        this.setState({close: true})        
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