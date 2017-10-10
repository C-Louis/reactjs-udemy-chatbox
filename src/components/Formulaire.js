//import react lib
import React from 'react';

//create new component
class Formulaire extends React.Component {

    //Create new state
    state = {
        length: this.props.length
    };

    createMessage = event => {
        event.preventDefault();
        //Get message from input
        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo
        };
        //
        this.props.addMessage(message);
        //Clear form after submit
        this.messageForm.reset();
        //Clear form state after submit
        const length = this.props.length;
        this.setState({ length });
    };

    countChars = event => {
        const length = this.props.length - this.message.value.length;
        this.setState({ length });
    };

    render() {
        //return jsx
        return (
            <form
                className="form"
                onSubmit={e => this.createMessage(e)}
                ref={input => this.messageForm = input }>
                <textarea
                    required
                    maxLength={this.props.length}
                    ref={input => this.message = input}
                    onChange={e => this.countChars(e)}
                />
                <div className="info">{this.state.length}</div>
                <button type="submit">Envoyer!</button>
            </form>
        )
    }
}

//To export component
export default Formulaire;