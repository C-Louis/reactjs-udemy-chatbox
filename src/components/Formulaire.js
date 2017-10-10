//import react lib
import React from 'react';

//create new component
class Formulaire extends React.Component {

    createMessage = event => {
        event.preventDefault();
        //Get message from input
        const message = this.message.value;
        //
        this.props.addMessage(message);
        //Clear form after submit
        this.messageForm.reset();
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
                    maxLength="140"
                    ref={input => this.message = input}
                />
                <div className="info">140</div>
                <button type="submit">Envoyer!</button>
            </form>
        )
    }
}

//To export component
export default Formulaire;