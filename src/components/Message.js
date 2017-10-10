//import react lib
import React from 'react';

//create new component
class Message extends React.Component {
    render() {
        //return jsx
        return (
            <p className="user-message">
                {this.props.details.pseudo}: {this.props.details.message}
            </p>
        )
    }
}

//To export component
export default Message;