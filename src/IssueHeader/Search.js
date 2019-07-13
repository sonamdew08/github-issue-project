import React from "react";

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            filter: "search",
            filterby: ""
        }
        this.getMatchedList = this.getMatchedList.bind(this);
    }
    getMatchedList(event){
        
        this.setState({ filterby: event.target.value }, () => {
            console.log(this.state.filterby)
            this.props.searchData(this.state.filter, this.state.filterby)
        });
    }

    render(){
        return (
            <input
                placeholder="Search..."
                onChange={this.getMatchedList}
            />
        );
    }
}

export default Search;