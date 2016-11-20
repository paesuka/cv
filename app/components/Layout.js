import React from 'react';
import Profile from './header/Profile';
import Content from './content/Content';

export default class ProfileTitle extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <Profile data={this.props.data}/>
                <Content data={this.props.data.content}></Content>
            </div>
        )
    }
};
