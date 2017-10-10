//import react lib
import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';

//create new component
class App extends React.Component {
    render() {
        return (
            //return jsx
            <div className="box">
                <div>
                    <div className="messages">
                        <Message pseudo={this.props.params.pseudo}/>
                    </div>
                    <Formulaire />
                </div>
            </div>
        )
    }
}

//To export component
export default App;