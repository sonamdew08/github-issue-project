import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import jsonData from './issues.json';
import IssuesList from './issueData/issuelist';
// import IssueHeader from "./IssueHeader/IssueHeader";
import Sort from "./IssueHeader/Sort"

var data = JSON.parse(JSON.stringify(jsonData))

class Issue extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issues: [],
            fetch: false
        }
        // console.log("Inside Constructor")
    }

    componentDidMount(){
        // console.log("inside component")
        if(!this.state.fetch){
            this.setState({issues: data, fetch: true})
        }
    }

    getListOfIssues(){
        console.log("Inside getListofissues")
        this.setState({issues: this.props.data})
    }
    
    render(){
        // console.log("Inside app render")
        return (
            <Container maxWidth="md">
                {/* <IssueHeader issues = {this.state.issues}/> */}
                
                <Sort issue = {this.props.issues} sortData = {this.getListOfIssues}/>

                {this.state.fetch? <IssuesList data={this.state.issues}/>: "Loading.."}             
            </Container>
        );
    }
}

export default Issue;