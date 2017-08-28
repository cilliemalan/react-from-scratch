import reactlogo from './content/react.svg';
import './styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';

class Greeter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            enthusiasm: 0
        };

        this.enthuse = this.enthuse.bind(this);
    }

    enthuse() {
        this.setState(state => ({ enthusiasm: state.enthusiasm + 1 }));
    }

    enthusiasm() {
        return "!".repeat(this.state.enthusiasm);
    }

    render() {
        return <div>
            {this.props.message}{this.enthusiasm()}
            <img src={this.props.src} onClick={this.enthuse} />
        </div>;
    }
}

const approot = document.getElementById('react-app');
ReactDOM.render(
    <Greeter src={reactlogo} message={"Hello World"} />,
    approot);