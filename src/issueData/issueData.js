import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import IssuesList from './issuelist';
import FilteredIssue from "../IssueHeader/IssueHeader";
import jsonData from '../issues.json';

var data = JSON.parse(JSON.stringify(jsonData));

class IssueData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issues: [],
            fetch: false, 
            currentFilter: "open",
            filter: false
        }
        this.getFilteredListOfIssues = this.getFilteredListOfIssues.bind(this)

    }

    componentDidMount(){
        // console.log("inside component")
        if(!this.state.fetch){
            this.setState({issues: data, fetch: true})
        }
    }

    getFilteredListOfIssues(value){
        console.log("Inside getListofissues")
        if(!this.state.filter)
        {
            this.setState({issues: value}, () => console.log("Inside getListofissues", this.state.issues))            
        }
        
    }
        
    render(){
        // console.log("Inside app render") filteredList = {this.getFilteredListOfIssues} 
        return (
            <Container maxWidth="md">
                <FilteredIssue issues = {data} filteredlist = {this.getFilteredListOfIssues}/>
                {this.state.fetch? <IssuesList data={this.state.issues}/>: "Loading.."}             
            </Container>
        );
    }
}

export default IssueData;