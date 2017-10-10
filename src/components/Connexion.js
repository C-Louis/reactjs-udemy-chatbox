//import react lib
import React from 'react';

//Create new component
class Connexion extends React.Component {
    render() {
        // return jsx
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input
                        type="text"
                        placeholder="Pseudo"
                        required
                    />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

//To export component
export default Connexion;