import React from 'react';

export default class Listing extends React.Component {
  // TODO use destructuring
    createListing(content, idx) {
      if (Array.isArray(content)) {
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
      } else {
        return (
          <p dangerouslySetInnerHTML = {{__html: content}} />
        );
      }
    }
    createSection(sections) {
        return sections.map((data, i) => {
            const listing = this.createListing(data.content, i);
            return (
                <section key={i}>
                    <h2>{data.title}</h2>
                    <div>
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
