import React from "react";
import 'typeface-roboto';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Navigation extends React.Component{

    handleActiveTab(e){

    }
    render(){
        return (
            <div class="container">
                <Tabs className="tabs">
                    <Tab label="code" />
                    <Tab label="issues"/>
                    <Tab label="Pull request"/>
                    <Tab label="Security"/>
                    <Tab label="Insight"/>
                </Tabs>
            </div>
        );
    }
}
export default Navigation;
