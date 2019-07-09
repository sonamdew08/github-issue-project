import React from "react";
import Issues from "./issues"
import IssueHeader from "../IssueHeader/IssueHeader"

class IssuesList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fetch: false,
            issues: []
        }
    }

    componentDidMount(){
        if(!this.state.fetch){
            this.setState({issues: this.props.data, fetch: true})
        }
    }
    
    render(){        
        console.log("inside issueslist render")
        const data = (this.props.id)?this.props.id : "open"
        console.log(data)
        // const keydata = this.props.keyValue || ""
        // console.log(keydata)
        return (
            <div>
                <IssueHeader />
                {this.state.fetch?this.state.issues.filter((issue) => (issue.state === data))
                .map((issue, index) => {
                    return (<Issues key={index} data={issue}/>)
                }):"loading.."
                }
            </div>
        );
    }
}

export default IssuesList;
