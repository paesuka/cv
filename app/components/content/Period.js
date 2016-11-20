import React from 'react';

export default class Period extends React.Component {
    createListing(content, idx) {
        return (
            <ul key={idx + 2}>
              {content.map((contentData, i) => {
                    if (Array.isArray(contentData)) {
                        return this.createListing(contentData);
                    } else {
                        return (
                            <li key={i}>{contentData}</li>
                        );
                    }
                })
              }
            </ul>
        );
    }
    createSection(sections) {
        return sections.map((data, i) => {
            const listing = this.createListing(data.content, i);
            return (
                <section key={i}>
                    <div id="period-date">
                        <span>{data.from + ' - ' + data.to}</span>
                    </div>
                    <div id="period-content">
                        <h2>{data.title}</h2>
                        <h3>{data.subtitle}</h3>
                        {listing}
                    </div>
                </section>
            );
        })
    }
    render() {
        const sections = this.createSection(this.props.data.sections);
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
