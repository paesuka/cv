import React from 'react';

export default class ProfileTitle extends React.Component {
    render() {
        return (
            <div id="profileTitle" className={this.props.type ? 'full' : 'small'}>
                <p className="name">
                    {this.props.data.name}
                </p>
                <p className="title">
                    {this.props.data.title}
                </p>
            </div>
        );
    }
};
