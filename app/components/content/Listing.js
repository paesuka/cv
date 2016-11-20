import React from 'react';

export default class Listing extends React.Component {
  // TODO use destructuring
    render() {
        const sections = this.props.data.sections.map((data, i) => {
            return (
                <section key={i}>
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                </section>
            );
        });
        return (
            <article>
                <header>
                    <h1>{this.props.data.title}</h1>
                </header>
                {sections}
            </article>
        );
    }
};
