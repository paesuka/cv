import React from 'react';

export default class ProfileInfo extends React.Component {
    render() {
	var lines = [];
	for (var i=0; i < this.props.data.addressLines.length; i++) {
	        lines.push(<p key={i}>{this.props.data.addressLines[i]}</p>);
	}
        return (
            <div id="profileInfo">
		{lines}
		<p dangerouslySetInnerHTML = {{__html: this.props.data.telephoneNumber}} />
		<p dangerouslySetInnerHTML = {{__html: this.props.data.email}} />
            </div>
        );
    }
};
