import React from "react";

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