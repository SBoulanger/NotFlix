import React, { Component } from 'react';
import './InputTextBox.css';

class InputTextBox extends Component {
        constructor(props) {
                super(props);
                this.promptText = this.promptText;
                this.type = this.type;
                this.id = this.id;
        }

        render() {
                return (
                        <input type = {this.props.type} placeholder = {this.props.promptText}/>
                );
        }
}
export default InputTextBox
