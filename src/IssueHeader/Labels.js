import React from "react";

class Labels extends React.Component{
    constructor(props) {
        super(props);

        this.state = { value: 'Labels' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ value: event.target.value });
    }

    render(){
        const data = this.props.issue
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="Labels" disabled>Labels</option>
                    {Array.isArray(data) && data.map((object, index) => (
                        <option key={index}>
                            {object.labels}
                        </option>
                        ))
                        }   
                </select>
            </div>
        );
    }

}

export default Labels;