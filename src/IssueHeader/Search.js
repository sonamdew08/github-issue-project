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
    getMatchedList(value){
        this.setState({ filterby: value }, () => {
            this.props.searchData(this.state.filter, this.state.filterby)
        });
    }

    render(){
        return (
            <input
                placeholder="Search..."
                onChange={word => {
                    this.getMatchedList(word);
                }}
            />
        );
    }
}

export default Search;