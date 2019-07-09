import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import jsonData from './issues.json';
import IssuesList from './issueData/issuelist';

var data = JSON.parse(JSON.stringify(jsonData))

class Issue extends React.Component {
    constructor(){
        super()
        this.state = {
            issues: [],
            fetch: false
        }
        console.log("Inside Constructor")
    }

    componentDidMount(){
        console.log("inside component")
        if(!this.state.fetch){
            this.setState({issues: data, fetch: true})
        }
    }
    
    render(){
        console.log("Inside app render")
        return (
            <Container maxWidth="md">
                {this.state.fetch? <IssuesList data={this.state.issues}/>: "Loading.."}               
            </Container>
        );
    }
}

export default Issue;