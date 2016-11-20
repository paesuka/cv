import React from 'react';

export default class ReferenceItem extends React.Component {
    // TODO destructuring the object instead of referenceing every prop
    render() {
        return (
            <section className="referenceItem">
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.position}</p>
                <p dangerouslySetInnerHTML = {{__html: this.props.data.company}} />
		<p dangerouslySetInnerHTML = {{__html: this.props.data.mail}} />
                <p dangerouslySetInnerHTML = {{__html: this.props.data.tel}} />
            </section>
        );
    }
};
