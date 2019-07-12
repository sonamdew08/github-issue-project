import React from "react";

class Author extends React.Component{
    constructor(props) {
        super(props);
        this.state = { filter: 'Author', filterby: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ filterby: event.target.value }, ()=> {
            this.props.authorData(this.state.filter, this.state.filterby)
        });
    }

    render(){
        const data = this.props.issue
        // console.log("Author" , data)
        return (
            <div>
                <select value={this.state.filter} onChange={this.handleChange}>
                <option value="Author" disabled>Author</option>
                    {Array.isArray(data) && data.map((object, index) => (
                        <option key={index}>
                            {object.user.login}
                        </option>
                        ))
                        }   
                </select>
            </div>
        );
    }
}

export default Author;