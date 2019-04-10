import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

        constructor(props) {
                super(props);
                this.text = this.text; {/*displayable text*/}
                this.onClick = this.onClick; {/*stores function when clicked*/}
        }

        render() {
                return (
                     <button className = "Button" onClick = {this.props.onClick}>{this.props.text}</button>
                );
        }
}

export default Button
