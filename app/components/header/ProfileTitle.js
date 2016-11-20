import React from 'react';

export default class ProfileTitle extends React.Component {
    render() {
        return (
            <div id="profileTitle" className={this.props.type ? 'full' : 'small'}>
                <h1>
                    {this.props.data.name}
                </h1>
                <h2>
                    {this.props.data.title}
                </h2>
            </div>
        );
    }
};
