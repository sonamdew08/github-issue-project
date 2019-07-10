import React from "react";
import IssuesList from "../issueData/issuelist"
import sortJsonData from "sort-json-array"
import Issue from "../App"

class Sort extends React.Component{
    constructor(props) {
        super(props);

        this.state = { value: 'Sort', data:[], fetch: false, sortedData: [], sort: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ value: event.target.value });
    }

    sortIssues(){
        if(this.state.value === 'newest'){
            console.log("newest")
            let data = sortJsonData(this.state.data, "created_at", 'des')
            this.setState({sortedData: data, sort: true})
        }
        if(this.state.value === 'oldest'){
            console.log("oldest")
            let data = sortJsonData(this.state.data, "created_at", 'asc')
            this.setState({sortedData: data, sort: true})
        }
        if(this.state.value === 'recently updated'){
            console.log("recently updated")
            let data = sortJsonData(this.state.data, "updated_at", 'des')
            this.setState({sortedData: data, sort: true})
        }
        if(this.state.value === 'least recently updated'){
            console.log("least recently updated")
            let data = sortJsonData(this.state.data, "updated_at", 'asc')
            console.log("data", data)
            this.setState({sortedData: data, sort: true})
            
        }
        
    }
    componentDidUpdate(){
        if(!this.state.fetch){
            this.setState({data: this.props.issue, fetch: true})
        }
        if(!this.state.sort){
            this.sortIssues();
        }        
    }

    render(){
        console.log("sort", this.props)
        console.log(this.state)
        const sortIssue = ['newest', 'oldest', 'recently updated', 'least recently updated']
        // if(this.state.sort){
        //     return <IssuesList data={this.state.sortedData}/>;
        // }
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="Sort" disabled>Sort</option>
                    {sortIssue.map((elems, index) => (
                        <option key={index} value={elems}>{elems}</option>
                    ))}                    
                </select>
                
                {this.state.sort ? (() => {
                    return <IssuesList data={this.state.sortedData}/>;
                })(): "" }                
            </div>
        );
    }
}
export default Sort;