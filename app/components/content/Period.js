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
                            <li key={i} dangerouslySetInnerHTML = {{__html: contentData}} />
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
                <section className="period-section" key={i}>
		    <div>
                        <span className="period-date">{data.from + ' - ' + data.to}</span>
                    <h2>{data.title}</h2>
		    </div>
                    <div className="period-content">
                        <h3 dangerouslySetInnerHTML = {{__html: data.subtitle}} />
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
