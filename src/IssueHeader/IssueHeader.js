import React from "react";
import Assignee from "./Assignee";
import Author from "./Author";
import Close from "./Close";
import Labels from "./Labels";
import MileStones from "./MileStones";
import Open from "./Open";
import Sort from "./Sort";
import Projects from "./Projects";

class FilteredIssue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            issues: [],
            currentFilter: "open"
        }
        this.getListOfIssues = this.getListOfIssues.bind(this)
        this.getFilter = this.getFilter.bind(this)
        this.getOpenedIssueList = this.getOpenedIssueList.bind(this)
    }

    componentDidMount(){
        this.setState({issues: this.props.issues})
    }

    getListOfIssues(value){
        this.setState({issues: value})
        console.log("##########", this.state.issues)
        this.props.filteredList(this.state.issues)
    }

    getFilter(newFilter){
        console.log("newFilter", newFilter)
        this.setState({currentFilter: newFilter});
        if(this.state.currentFilter === 'open'){
            this.getOpenedIssueList()
        }
    }

    getOpenedIssueList(){
        
    }

    render(){        
        console.log("in issue header render")
        // console.log(this.props.currentFilter)
        return (
            <div className="issue-header">
                <Open openedData = {this.getFilter} />
                {/* <Close issue = {this.props.issues} closedData = {this.getListOfIssues}/>
                <Author issue = {this.props.issues}/>
                {/* <Labels issue = {this.props.issues}/> */}
                {/* <Projects issue = {this.props.issues}/>
                <MileStones issue = {this.props.issues}/>
                <Assignee issue = {this.props.issues}/>
                <Sort issue = {this.props.issues} sortData = {this.getListOfIssues} /> */}
            </div>
        );
    }
}

export default FilteredIssue;