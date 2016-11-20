import React from 'react';

export default class ProfileInfo extends React.Component {
    render() {
        return (
            <div id="profileInfo">
                <span>
                    {this.props.data.address}
                </span><br/>
                <a href={'tel:' + this.props.data.telephoneNumber}>
                    {this.props.data.telephoneNumber}
                </a><br/>
                <a href={'mailto:' + this.props.data.email}>
                    {this.props.data.email}
                </a>
            </div>
        );
    }
};
