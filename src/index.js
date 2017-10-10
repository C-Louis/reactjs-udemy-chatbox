//import react lib
import React from 'react';
import { render } from 'react-dom';
//Components
import Connexion from './components/Connexion'
import App from './components/App'
//CSS
import './index.css';

//To display
render(
    //the component Connexion
    <App/>,
    document.getElementById('root')
);