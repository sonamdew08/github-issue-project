import React from "react";


class Author extends React.Component{
    constructor(props) {
        super(props);

        this.state = { value: 'Author' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ value: event.target.value });
    }

    render(){
        const data = this.props.issue
        console.log("Author" , data)
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
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

// export default connect(
//     state => ({
//         issues: state
//     })
// )(Author);
export default Author;