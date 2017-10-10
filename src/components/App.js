//import react lib
import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../firebase';
//CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

//create new component
class App extends React.Component {

    //Create new state
    state = {
        messages: {}
    };

    //Before component is mounted, check if there are messages to display
    componentWillMount() {
        //Firebase structure
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    //As soon as something change in state = new message
    componentDidUpdate() {
        //Put scroll back at the bottom
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    //Add a message to the state
    addMessage = message => {
        //Copy paste so that we don't work straight on it
        const messages = {...this.state.messages};
        //Add the message with timestamp key
        const timestamp = Date.now();
        //Get message
        messages[`message-${timestamp}`] = message;
        //Delete older message if more than 10 (To delete from state : use =null)
        Object
            .keys(messages)
            .slice(0, -10)
            .map(key => messages[key] = null);
        //Update state
        this.setState({ messages });
    };

    //Check if message pseudo = user
    isUser = pseudo => {
      return pseudo === this.props.params.pseudo;
    };

    render() {

        //Get messages from state
        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message
                            key={key}
                            details={this.state.messages[key]}
                            isUser={this.isUser}/>
            );

        return (
            //return jsx
            <div className="box">
                <div>
                    <div
                        className="messages"
                        ref={input => this.messages = input }>
                        <ReactCSSTransitionGroup
                            component="div"
                            transitionName="message"
                            transitionEnterTimeout={200}
                            transitionLeaveTimeout={200}
                        >
                            {messages}
                        </ReactCSSTransitionGroup>
                    </div>
                    <Formulaire
                        addMessage={this.addMessage}
                        pseudo={this.props.params.pseudo}
                        length="140" />
                </div>
            </div>
        )
    }
}

//To export component
export default App;