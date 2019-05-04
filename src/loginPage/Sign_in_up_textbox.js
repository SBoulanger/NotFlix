import React, { Component } from 'react';
import './Sign_in_up_textbox.css';

class SignInUpTextBox extends Component {
        constructor(props) {
                super(props);
                this.promptText = this.promptText;
                this.type = this.type;
                this.id = this.id; /*id for CSS*/
                this.onchange = this.onchange; /*pass in function*/
                this.name = this.name; /*name to get value from component*/
        }

        render() {
                return (
                        <input type = {this.props.type} onChange={this.props.onchange} name={this.props.name} placeholder = {this.props.promptText}/>
                );
        }
}
export default SignInUpTextBox