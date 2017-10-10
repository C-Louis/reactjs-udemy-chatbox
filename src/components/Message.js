//import react lib
import React from 'react';

//create new component
class Message extends React.Component {

    //Check user
    preRender = isUser => {
      if (isUser) {
          return (
              <p className="user-message">
                  {this.props.details.message}
              </p>
          )
      }
      return (
        <p className="not-user-message">
            <strong>{this.props.details.pseudo}</strong>:
            {this.props.details.message}
        </p>
      )
    };

    render() {
        return this.preRender(this.props.isUser(this.props.details.pseudo));
    }
}

//To export component
export default Message;