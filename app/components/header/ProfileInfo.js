import React from 'react';

export default class ProfileInfo extends React.Component {
    render() {
        return (
            <div id="profileInfo">
                <span>
                    {this.props.data.address}
                </span>
		<p dangerouslySetInnerHTML = {{__html: this.props.data.telephoneNumber}} />
		<p dangerouslySetInnerHTML = {{__html: this.props.data.email}} />
            </div>
        );
    }
};
