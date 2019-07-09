import React from "react";

class Open extends React.Component{
    render(){
        console.log("inside open component" , this.props)
        return (
            <a href="">{this.props.open} Open &nbsp;&nbsp;</a>
        );
    }
}

export default Open;