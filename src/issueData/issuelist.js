import React from "react";
import Issues from "./issues"
import IssueHeader from "../IssueHeader/IssueHeader"

class IssuesList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fetch: false,
            issues: [],
            open: true, 
            close: false
        } 
    }

    componentDidMount(){
        if(!this.state.fetch){
            this.setState({issues: this.props.data, fetch: true})
        }
    }
    
    render(){        
        console.log("inside issueslist render")
        console.log(this.props)
        const data = (this.props.open)? this.props.state : "open"
        console.log(data)
        return (
            <div>
                <IssueHeader />
                {this.state.fetch?this.state.issues.filter((issue) => (issue.state === data))
                .map((issue, index) => {
                    return (<Issues key={index} data={issue}/>)
                }):"loading.."
                }
                {/* {this.state.fetch?this.state.issues.map((issue, index) => {
                    return (<Issues key={index} data={issue}/>)
                }):"loading.."
                } */}
            </div>
        );
    }
}

export default IssuesList;
