//import react lib
import React from 'react';
import { render } from 'react-dom';
//Components
import Connexion from './components/Connexion'
import App from './components/App'
import NotFound from './components/NotFound'
//Rooter
import { BrowserRouter, Match, Miss } from 'react-router';
//CSS
import './index.css';

//Stateless component router that only displays something (no logic behind)
const Root = () => {
    return (
        //For different route options
        <BrowserRouter>
            {/*In BrowerRouter, components need to be wrap into a div*/}
            <div>
                <Match exactly pattern="/" component={Connexion}/>
                <Match pattern="/pseudo/:pseudo" component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
};

//To display
render(
    //the component Connexion
    <Root/>,
    document.getElementById('root')
);