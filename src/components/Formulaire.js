//import react lib
import React from 'react';

//create new component
class Formulaire extends React.Component {
    render() {
        //return jsx
        return (
            <form className="form">
                <textarea required maxLength="140"/>
                <div className="info">140</div>
                <button type="submit">Envoyer!</button>
            </form>
        )
    }
}

//To export component
export default Formulaire;