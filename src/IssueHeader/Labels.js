import React from "react";

class Labels extends React.Component{
    constructor(props) {
        super(props);
        this.state = { filter: 'Labels', filterby: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ filterby: event.target.value }, ()=> {
            this.props.labelData(this.state.filter, this.state.filterby)});
    }

    render(){
        const data = this.props.issue
        return (
            <div>
                <select value={this.state.filter} onChange={this.handleChange}>
                <option value="Labels" disabled>Labels</option>
                    {Array.isArray(data) && data.map((object, index) => (
                        (object.labels).map((label, index) => (
                            <option key={index}>
                            {label.name}
                            </option>
                        ))
                    ))
                    }   
                </select>
            </div>
        );
    }

}

export default Labels;