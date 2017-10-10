//import react lib
import React from 'react';
import { render } from 'react-dom';
//CSS
import './index.css';

//Create new component Connexion
class Connexion extends React.Component {
    render() {
        return (
            // return jsx
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

//To display
render(
    //the component Connexion
    <Connexion/>,
    document.getElementById('root')
);