//import react lib
import React from 'react';
import { render } from 'react-dom';
//Components
import Connexion from './components/Connexion'
//CSS
import './index.css';

//To display
render(
    //the component Connexion
    <Connexion/>,
    document.getElementById('root')
);