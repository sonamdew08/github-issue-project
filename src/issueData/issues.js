import React from "react";

class Issues extends React.Component{

    render(){
        const issues = this.props.data
        return (
            <div className="issue">
                <a href="">{issues.title}</a>{Array.isArray(issues.labels) && issues.labels.map((label) => {
                    // console.log("bgcolor", bgColor)
                    return <a className="label-link" href="" style={{
                        backgroundColor: "#" + label.color
                      }}>{label.name}</a>
                })}
                <div>
                    <p className="issue-info">#{issues.id} {issues.state} by {issues.user.login}</p>
                </div>
            </div>
        );
    }
}

export default Issues;