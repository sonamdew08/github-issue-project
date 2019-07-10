import React from "react";
import Assignee from "./Assignee";
import Author from "./Author";
import Close from "./Close";
import Labels from "./Labels";
import MileStones from "./MileStones";
import Open from "./Open";
import Sort from "./Sort";
import Projects from "./Projects";

class IssueHeader extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         fetch: false,
    //         issues: []
    //     }
    // }

    // componentDidMount(){
    //     if(!this.state.fetch){
    //         this.setState({issues: this.props.data, fetch: true})
    //     }
    // }
        
    render(){        
        console.log("in issue header render")
        console.log(this.props)
        return (
            <div className="issue-header">
                <Open issue = {this.props.issues}/>
                <Close issue = {this.props.issues}/>
                <Author issue = {this.props.issues}/>
                <Labels issue = {this.props.issues}/>
                <Projects issue = {this.props.issues}/>
                <MileStones issue = {this.props.issues}/>
                <Assignee issue = {this.props.issues}/>
                <Sort issue = {this.props.issues}/>
            </div>
        );
    }
}

export default IssueHeader