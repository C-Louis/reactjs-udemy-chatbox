//import react lib
import React from 'react';

//Create new component
class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault();
        //Get the pseudo thanks to the input REF (faster for React)
        const pseudo = this.pseudoInput.value;
        //Change url (CONTEXT allows a parent file to pass things to all its child files -> useful with 'transitionTo')
        // 'transitionTo' navigates to another page
        this.context.router.transitionTo(`/pseudo/${pseudo}`);
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
    //Get context
    static contextTypes = {
        router: React.PropTypes.object
    }
}

//To export component
export default Connexion;