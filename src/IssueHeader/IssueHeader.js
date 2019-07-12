import React from "react";
import Assignee from "./Assignee";
import Author from "./Author";
import Close from "./Close";
import Labels from "./Labels";
import MileStones from "./MileStones";
import Open from "./Open";
import Sort from "./Sort";
import Projects from "./Projects";
import sortJsonData from "sort-json-array"


class FilteredIssue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            issues: [],
            filterIssues: [],
            currentFilter: "open",
            getData: false
        }
        this.getListOfIssues = this.getListOfIssues.bind(this)
        this.getFilter = this.getFilter.bind(this)
        this.getOpenedIssueList = this.getOpenedIssueList.bind(this)
        this.getClosedIssueList = this.getClosedIssueList.bind(this)
        this.getSortedIssueList = this.getSortedIssueList.bind(this)
    }

    componentDidMount(){
        this.setState({issues: this.props.issues})
    }

    getListOfIssues(value){
        this.setState({issues: value})
        console.log("##########", this.state.issues)
        this.props.filteredList(this.state.issues)
    }

    getFilter(newFilter, filterby){
        console.log("newFilter", newFilter)
        console.log("filterby", filterby)
        this.setState({currentFilter: newFilter}, 
            () =>{
                if(this.state.currentFilter === 'open'){
                    this.getOpenedIssueList()
                }
        
                else if(this.state.currentFilter === 'close'){
                    console.log("close if")
                    this.getClosedIssueList()
                }
                else if(this.state.currentFilter === 'Sort'){
                    this.getSortedIssueList(filterby)
                }
                else{
        
                }
            });
        
    }

    getOpenedIssueList(){
        console.log("Hello")
        if(!this.state.getData){
            this.setState({filterIssues: this.state.issues.filter((item) => (item.state === 'open'))}, 
            () => {
                console.log("Hello from if", this.state.filterIssues)
                this.props.filteredlist(this.state.filterIssues)
            })
        }
    }

    getClosedIssueList(){
        console.log("Hello")
        if(!this.state.getData){
            this.setState({filterIssues: this.state.issues.filter((item) => (item.state === 'close'))}, 
            () => {
                console.log("Hello from if", this.state.filterIssues)
                this.props.filteredlist(this.state.filterIssues)
            })
        }
    }

    getSortedIssueList(filterby){
        if(filterby === 'newest'){
            console.log("newest")
            let data = sortJsonData(this.state.issues, "created_at", 'des')
            this.setState({filterIssues: data}, () => this.props.filteredlist(this.state.filterIssues))            
        }
        if(filterby === 'oldest'){
            console.log("oldest")
            let data = sortJsonData(this.state.issues, "created_at", 'asc')
            console.log(data)
            this.setState({filterIssues: data}, () => this.props.filteredlist(this.state.filterIssues))
        }
        if(filterby === 'recently updated'){
            console.log("recently updated")
            let data = sortJsonData(this.state.issues, "updated_at", 'des')
            this.setState({filterIssues: data}, () => this.props.filteredlist(this.state.filterIssues))
        }
        if(filterby === 'least recently updated'){
            console.log("least recently updated")
            let data = sortJsonData(this.state.issues, "updated_at", 'asc')
            this.setState({filterIssues: data}, () => this.props.filteredlist(this.state.filterIssues))
        }
    }

    render(){        
        console.log("in issue header render")
        // console.log(this.props.currentFilter)
        return (
            <div className="issue-header">
                <Open openedData = {this.getFilter} />
                <Close closedData = {this.getFilter}/>
                {/* <Author issue = {this.props.issues}/> */}
                {/* <Labels issue = {this.props.issues}/> */}
                {/* <Projects issue = {this.props.issues}/>
                <MileStones issue = {this.props.issues}/>
                <Assignee issue = {this.props.issues}/> */}
                <Sort sortData = {this.getFilter} />
            </div>
        );
    }
}

export default FilteredIssue;