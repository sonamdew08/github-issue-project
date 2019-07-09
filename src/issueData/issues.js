import React from "react";
import IssueHeader from "../IssueHeader/IssueHeader"
import { transformAsync } from "@babel/core";
// import { connect } from 'react-redux';

class Issues extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            open: true
        }
    }
    
    render(){
        const issues = this.props.data
        return (
            <div className="issue">
                <a href="">{issues.title}</a>
                <div>
                    <p className="issue-info">#{issues.id} opened by {issues.user.login}</p>
                </div>
            </div>
        );
    }
}

export default Issues;