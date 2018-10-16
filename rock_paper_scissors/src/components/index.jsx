import React, {Component} from 'react';

class Button extends Component {
    render() {
        console.log("props", this.props)
        return (
            <button onClick={() => this.props.mathFunction(this.props.name)}>{this.props.name}</button>
        );
    }
}

export default Button;