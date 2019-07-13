import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import IssuesList from './issuelist';
import FilteredIssue from "../IssueHeader/IssueHeader";
import jsonData from '../issues.json';
import Pagination from "material-ui-flat-pagination";

var data = JSON.parse(JSON.stringify(jsonData));

class IssueData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issues: [],
            fetch: false, 
            currentFilter: "open",
            filter: false,
            offset: 0
        }
        this.getFilteredListOfIssues = this.getFilteredListOfIssues.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
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

    handleClick(offset){
        console.log(offset)
        this.setState({ offset },()=>{console.log("issue data", this.state)});
    }
        
    render(){
        // console.log("Inside app render") filteredList = {this.getFilteredListOfIssues} 
        return (
            <Container maxWidth="md">
                <FilteredIssue issues = {data} filteredlist = {this.getFilteredListOfIssues}/>
                {this.state.fetch? <IssuesList data={this.state.issues} offset={this.state.offset}/>: "Loading.."}   
                <Pagination limit={6} offset={this.state.offset} total={this.state.issues.length} onClick={(e, offset) => this.handleClick(offset)} >
                    
                </Pagination>         
            </Container>
        );
    }
}

export default IssueData;