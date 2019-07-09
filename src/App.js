import React from 'react';
import './App.css';
// import Navigation from "./nav/Navigation"
import IssueHeader from "./IssueHeader/IssueHeader"
import Container from '@material-ui/core/Container';
import jsonData from './issues.json';
import Issues from './issueData/issues';
import { connect } from 'react-redux';

var data = JSON.parse(JSON.stringify(jsonData))

class Issue extends React.Component {
    
    render(){
        return (
            <Container maxWidth="md">
                {/* <IssueHeader issueData={this.state.issueData} /> */}
                <Issues/>
            </Container>
        );
    }
}

export default connect(
    state => ({
        issues: state
    })
)(Issue);