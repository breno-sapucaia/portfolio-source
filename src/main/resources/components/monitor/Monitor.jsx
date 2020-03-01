import React from 'react';
import './Moniotr.css'
import Typed from './../typed/Typed'

const Monitor = (props) => {
    return (
        <section className="center">
            <div className="monitor">
                <div className="monitor-background">
                    <p id="text" className="m-0 p-1 pt-2 text-green">
                        Breno@PORTFOLIO &nbsp;
                        <span className="text-yellow">~/breno.github.io</span>
                        <br />
                        <span className="text-white">$ <Typed strings={strings}/></span> </p>
                    <br/>
                    
                </div>
            </div>
        </section>
    );
}
const strings = [
    'love learn <strong style="color:#7be5de"> programing </strong> ❤️',
    'like play <i style="color:orange">basketball</i> 🏀',
    'definitly drink <i><strong style="color:#bc7e01">Coffee </strong></i> ☕'
]
export default Monitor;