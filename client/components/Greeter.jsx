import React from 'react';

export class Greeter extends React.Component {

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