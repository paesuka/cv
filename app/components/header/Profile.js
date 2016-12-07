import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileInfo from './ProfileInfo';
import ProfileTitle from './ProfileTitle';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFullHeader: true
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        const scrollTop = event.srcElement.scrollingElement.scrollTop,
            showFullHeader = (scrollTop === 0),
            stateChanged = this.state.showFullHeader !== showFullHeader;
        if (stateChanged) {
            this.setState({
                showFullHeader: showFullHeader
            });
        }
    }
    render() {
        return (
	    <div className="header-container">
            <header className={this.state.showFullHeader ? "full" : ""} id="profile">
                    <ProfilePicture data={this.props.data.profilePicture}/>
                    <ProfileInfo data={this.props.data.profileData}/>
                <ProfileTitle type={this.state.full} data={this.props.data.profileTitle}/>
            </header>
	    </div>
        )
    }
};
