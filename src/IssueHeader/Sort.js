import React from "react";

class Sort extends React.Component{
    render(){
        const sortIssue = ['newest', 'oldest', 'recently updated', 'least recently updated']
        return (
            <div>
                <select>
                    {sortIssue.map((elems, index) => (
                        <option key={index}>{elems}</option>
                    ))}                    
                </select>
            </div>
        );
    }
}

export default Sort;