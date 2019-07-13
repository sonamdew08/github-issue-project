import React from "react";
import Author from "./Author";
import Close from "./Close";
import Labels from "./Labels";
import Open from "./Open";
import Sort from "./Sort";
import sortJsonData from "sort-json-array"
import Search from "./Search";

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
        this.getIssueListByAuthor = this.getIssueListByAuthor.bind(this)
        this.getIssueListByLabels = this.getIssueListByLabels.bind(this)
        this.getIssueListBySearch = this.getIssueListBySearch.bind(this)
    }

    componentDidMount(){
        this.setState({issues: this.props.issues})
    }

    getListOfIssues(value){
        this.setState({issues: value})
        this.props.filteredList(this.state.issues)
    }

    getFilter(newFilter, filterby){
        this.setState({currentFilter: newFilter}, 
            () => {
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
                else if(this.state.currentFilter === 'Author'){
                    this.getIssueListByAuthor(filterby)
                }
                else if(this.state.currentFilter === 'Labels'){
                    this.getIssueListByLabels(filterby)
                }
                else if(this.state.currentFilter === 'search'){
                    this.getIssueListBySearch(filterby)
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

    getIssueListByAuthor(filterby){
        if(!this.state.getData){
            this.setState({filterIssues: this.state.issues.filter((item) => (item.user.login === filterby))}, 
            () => {
                console.log("Hello from if", this.state.filterIssues)
                this.props.filteredlist(this.state.filterIssues)
            })
        }
    }

    getIssueListByLabels(filterby){
        var lists = []
        this.state.issues.map((item) => {
            if(item.labels.length > 0){
                for(let i = 0; i < item.labels.length; i++){
                    if(item.labels[i].name === filterby){
                        lists.push(item)
                    }
                }                
            }
        })
        this.setState({filterIssues: lists}, () => this.props.filteredlist(this.state.filterIssues))
    }

    getIssueListBySearch(filterby){
        console.log("filter", filterby)
        const regex = new RegExp(filterby, 'i');
        console.log("regex", regex)
        if(!this.state.getData){
            this.setState({filterIssues: this.state.issues.filter(item => item.title.match(regex))},
            () => {
                this.props.filteredlist(this.state.filterIssues)
            })
        }
    }

    render(){       
        return (
            <div className="issue-header">
                <Open openedData = {this.getFilter} />
                <Close closedData = {this.getFilter}/>
                <Search searchData = {this.getFilter}/>
                <Author authorData = {this.getFilter} issue = {this.props.issues}/>
                <Labels labelData = {this.getFilter} issue = {this.props.issues}/>
                <Sort sortData = {this.getFilter} />
            </div>
        );
    }
}

export default FilteredIssue;