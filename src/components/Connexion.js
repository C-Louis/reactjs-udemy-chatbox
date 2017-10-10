//import react lib
import React from 'react';

//Create new component
class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault();
        //Get the pseudo thanks to the input REF (faster for React)
        const pseudo = this.pseudoInput.value;
        //Change url
    };

    render() {
        // return jsx
        return (
            <div className="connexionBox" onSubmit={e => this.goToChat(e)}>
                <form className="connexion">
                    <input
                        type="text"
                        placeholder="Pseudo"
                        required
                        ref={input => { this.pseudoInput = input}}
                    />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

//To export component
export default Connexion;