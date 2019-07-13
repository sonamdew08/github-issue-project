import React from "react";
import Issues from "./issues"

class IssuesList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fetch: false,
            data: false,
            issues: [],
            offset: 0
        }
    }

    componentDidMount(){
        if(!this.state.fetch){            
            this.setState({issues: this.props.data, fetch: true, data:true, offset: this.props.offset})
        }
    }
    // prevProps !== this.props 
    componentDidUpdate(prevProps){
        console.log("updated")
        if(prevProps !== this.props){
            console.log("inside update condition")
            this.setState({issues: this.props.data, data: false, offset: this.props.offset},()=>{
                console.log("issuelist....", this.props)
            })
        }
    }

    render(){
        let startindex = this.state.offset || 0
        let endindex = startindex + 6
        return (
            <div>
                {this.state.fetch?this.state.issues.slice(startindex, endindex).map((issue, index) => {
                    return (<Issues key={index} data={issue}/>)
                }):<p>loading...</p>
                }
            </div>
        );
    }
}

export default IssuesList;
