import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

        constructor(props) {
                super(props);
                this.text = this.text;
        }

        render() {
                return (
                     <button className = "Button">{this.props.text}</button>
                );
        }
}

export default Button
