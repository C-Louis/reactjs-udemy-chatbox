//import react lib
import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';

//create new component
class App extends React.Component {

    //Create new state
    state = {
        messages: {}
    };

    //Add a message to the state
    addMessage = message => {
        //Copy paste so that we don't work straight on it
        const messages = {...this.state.messages};
        //Add the message with timestamp key
        const timestamp = Date.now();
        //Get message
        messages[`message-${timestamp}`] = message;
        //Update state
        this.setState({ messages });
    };

    render() {
        return (
            //return jsx
            <div className="box">
                <div>
                    <div className="messages">
                        <Message pseudo={this.props.params.pseudo}/>
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