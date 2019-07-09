import React from "react";
import IssueHeader from "../IssueHeader/IssueHeader"
import { transformAsync } from "@babel/core";
import { connect } from 'react-redux';

class Issues extends React.Component{
    
    render(){
        const issues = this.props.issues
        console.log("inside issues render")
        console.log(issues)
        return (
            <div>
                <table>
                    <tbody>
                        <tr className="issue"><IssueHeader issues={issues}/></tr>
                        {Array.isArray(issues) && issues.map((object, index) => (
                        <tr className="issue" key={index}>
                            <a className="issue-links" href="">{object.title}</a>
                            {object.state}
                        </tr>
                    ))
                    }   
                    </tbody>
                    
                </table>
                
            </div>
        );
    }
}

export default connect(
    state => ({
        issues: state
    })
)(Issues);