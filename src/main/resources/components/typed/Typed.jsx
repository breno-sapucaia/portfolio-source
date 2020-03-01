import React, { Component } from 'react';
import Typed from 'typed.js'
class Type extends Component {
    
    componentDidMount() {
        const { strings } = this.props;
    
        const options = {
            strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }
        this.typed = new Typed(this.el, options);
    }

    render() { 
        return (
            <span>I&nbsp;
            <span ref={(el) => { this.el = el; }}>

            </span>
            </span>
         );
    }
}
 
export default Type;