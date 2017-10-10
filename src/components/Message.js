//import react lib
import React from 'react';

//create new component
class Message extends React.Component {
    render() {
        //return jsx
        return (
            <p className="user-message">
                Pseudo: Mon super message!
            </p>
        )
    }
}

//To export component
export default Message;