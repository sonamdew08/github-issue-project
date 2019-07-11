import React from "react";
import Issues from "./issues"

class IssuesList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fetch: false,
            data: false,
            issues: []
        } 
        console.log("calling constructor")
        console.log(this.state)
    }

    componentDidMount(){
        if(!this.state.fetch){
            this.setState({issues: this.props.data, fetch: true, data:true})
        }
    }
    
    componentDidUpdate(prevProps){
        console.log("updated")
        console.log("prevProps", prevProps)
        console.log("currProps", this.props)
        // this.setState({issues: this.props.data})
        if(prevProps !== this.props){
            console.log("inside update condition")
            this.setState({issues: this.props.data, data: false})
        }
    }

    render(){        
        console.log("inside issueslist render")
        console.log(this.props)
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
