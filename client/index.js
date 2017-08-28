import reactlogo from './content/react.svg';
import './styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import {Greeter} from './components/Greeter';

const approot = document.getElementById('react-app');
ReactDOM.render(
    <Greeter src={reactlogo} message={"Hello World"} />,
    approot);