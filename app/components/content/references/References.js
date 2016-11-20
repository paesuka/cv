import React from 'react';
import ReferenceItem from './ReferenceItem';

export default class References extends React.Component {
    render() {
      const referenceItems = this.props.data.content.map((data, i) => {
          return (
              <ReferenceItem key={i} data={data}></ReferenceItem>
          );
      });
      return (
          <article>
              <header>
                  <h1>{this.props.data.title}</h1>
              </header>
              {referenceItems}
          </article>
      );
    }
};
