import React from 'react';
import Listing from './Listing';
import Period from './Period';
import References from './references/References';

export default class Content extends React.Component {
    render() {
        const articles = this.props.data.map((data, i) => {
          switch (data.type) {
            case "listing":
              return (
                <Listing key={i} data={data}></Listing>
              );
              break;
            case "period":
              return (
                <Period key={i} data={data}></Period>
              );
              break;
            case "references":
              return (
                <References key={i} data={data}></References>
              );
              break;
            default:
              return '';
          }
        });
        return (
            <div id="content">
            {articles}
            </div>
        )
    }
};
