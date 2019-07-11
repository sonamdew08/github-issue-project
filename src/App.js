import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import jsonData from './issues.json';
import IssuesList from './issueData/issuelist';
import FilteredIssue from "./IssueHeader/IssueHeader";
import Sort from "./IssueHeader/Sort"

var data = JSON.parse(JSON.stringify(jsonData))

class Issue extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issues: [],
            fetch: false, 
            currentFilter: "open"
        }
        // console.log("Inside Constructor")
        this.getFilteredListOfIssues = this.getFilteredListOfIssues.bind(this)
        // this.getListOfIssues = this.getListOfIssues.bind(this)

    }

    componentDidMount(){
        // console.log("inside component")
        if(!this.state.fetch){
            this.setState({issues: data, fetch: true})
        }
    }

    getFilteredListOfIssues(value){
        console.log("Inside getListofissues")
        this.setState({issues: value})
        console.log(this.state.issues)
    }
        
    render(){
        // console.log("Inside app render")
        return (
            <Container maxWidth="md">
                <FilteredIssue issues = {data} filteredList = {this.getFilteredListOfIssues} />
                {this.state.fetch? <IssuesList data={this.state.issues}/>: "Loading.."}             
            </Container>
        );
    }
}

export default Issue;