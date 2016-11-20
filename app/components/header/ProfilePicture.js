import React from 'react';

export default class ProfilePicture extends React.Component {
    render(){
        return (
            <div id="profilePicture">
              <img src={require('../../assets/images.jpg')} />
            </div>
        )
    }
};
