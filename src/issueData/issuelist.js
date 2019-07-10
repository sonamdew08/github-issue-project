import React from "react";
import Issues from "./issues"

class IssuesList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fetch: this.props.fetch || false,
            issues: []
        } 
        console.log("calling constructor")
        console.log(this.state)
    }

    componentDidMount(){
        if(!this.state.fetch){
            this.setState({issues: this.props.data})
        }
    }
    
    componentDidUpdate(){
        console.log("updated")
        if(!this.state.fetch){
            console.log("inside update condition")
            this.setState({issues: this.props.data, fetch: true})
        }
    }

    render(){        
        console.log("inside issueslist render")
        console.log(this.state)
        return (
            <div>
                {console.log("--------------------", this.state)}
                {this.state.fetch?this.state.issues.map((issue, index) => {
                    return (<Issues key={index} data={issue}/>)
                }):<p>loading...</p>
                }
            </div>
        );
    }
}

export default IssuesList;
