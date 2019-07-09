import React from "react";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

class Author extends React.Component{
    constructor(props){
        super(props);
        this.state={
            author: [{
                name : "",
                avatar: "",
                id: ""
            }]
        }
    }
    render(){
        const data = this.props.issues
        return (
            <div>
                <form>
                    <FormControl>
                        <InputLabel htmlFor="filterby-author">Author</InputLabel>
                        <Select>
                            {Array.isArray(data) && data.map((object, index) => (
                            <MenuItem className="issue" key={index}>
                                {object.login}
                            </MenuItem>
                        ))
                        }   
                        </Select>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default connect(
    state => ({
        issues: state
    })
)(Author);
