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
    }

    componentDidMount(){
        if(!this.state.fetch){
            this.setState({issues: this.props.data, fetch: true, data:true})
        }
    }
    
    // componentDidUpdate(prevProps){
    //     console.log("updated")
    //     if(this.state.data || prevProps !== this.props ){
    //         console.log("inside update condition")
    //         this.setState({issues: this.props.data, data: false})
    //     }
    // }

    render(){
        return (
            <div>
                {this.state.fetch?this.state.issues.map((issue, index) => {
                    return (<Issues key={index} data={issue}/>)
                }):<p>loading...</p>
                }
            </div>
        );
    }
}

export default IssuesList;
