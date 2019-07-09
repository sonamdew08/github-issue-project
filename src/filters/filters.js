import React from "react";
import Labeltag from "./labelTag";
import MileStone from "./MileStone";
import NewIssue from "./NewIssue";
import SearchBar from "./Searchbar";

class Filters extends React.Component{
    render(){
        return (
            <div>
                <SearchBar />
                <Labeltag />
                <MileStone />
                <NewIssue />
            </div>
        );
    }
}

export default Filters;