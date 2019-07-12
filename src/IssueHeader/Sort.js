import React from "react";
import IssuesList from "../issueData/issuelist"
import sortJsonData from "sort-json-array"
import Issue from "../App"

class Sort extends React.Component{
    constructor(props) {
        super(props);

        this.state = { filter: 'Sort', filterby:"" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ filterby: event.target.value }, ()=>{
            this.props.sortData(this.state.filter, this.state.filterby)
        });
    }

    render(){
        console.log("sort", this.props)
        console.log(this.state)
        const sortIssue = ['newest', 'oldest', 'recently updated', 'least recently updated']
        return (
            <div>
                <select value={this.state.filter} onChange={this.handleChange}>
                <option value="Sort" disabled>Sort</option>
                    {sortIssue.map((elems, index) => (
                        <option key={index} value={elems}>{elems}</option>
                    ))}                    
                </select>
            </div>
        );
    }
}
export default Sort;