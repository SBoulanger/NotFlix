import React, { Component } from 'react';
import './LinkText.css';

class LinkText extends Component {

        constructor(props) {
                super(props);
                this.pathway = this.pathway;
                this.label = this.label;
        }

        render() {
                return(
                        <a href = {this.props.pathway}>{this.props.label}</a>
                );
        }
}

export default LinkText
