import React from "react";
import Assignee from "./Assignee";
import Author from "./Author";
import Close from "./Close";
import Labels from "./Labels";
import MileStones from "./MileStones";
import Open from "./Open";
import Sort from "./Sort";
import Projects from "./Projects";

class IssueHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: 0,
            close: 0
        }
    }
    

    // handleOpenIssue(issue){
    //     console.log(issue)
    //     for(let i = 0; i < issue.length; i++){
                
    //         if(issue[i]["state"] === 'open'){
    //             console.log("inside loop")
    //             this.setState((prevState) => ({
    //                 open: prevState.open + 1
    //             }),()=> {
    //                 console.log("=============", this.state.open)
    //             });
    //         }
    //         if(issue[i]["state"] === 'close'){
    //             this.setState((prevState) => ({
    //                 close: prevState.close + 1
    //             }));
    //         }
    //     }
        
    // }

    
    render(){
        
        console.log("in issue header render")
        return (
            <div className="issue-header">
                <Open />
                <Close />
                <Author />
                <Labels />
                <Projects />
                <MileStones />
                <Assignee />
                <Sort />
            </div>
        );
    }
}

export default IssueHeader