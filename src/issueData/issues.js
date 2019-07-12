import React from "react";

class Issues extends React.Component{

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