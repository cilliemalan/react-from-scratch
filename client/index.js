import reactlogo from './content/react.svg';
import './styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';

function component() {
    return <div>
        Hello World
        <img src={reactlogo} />
    </div>;
}

ReactDOM.render(component(), document.body);