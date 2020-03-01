import React from 'react';
import './ButtonMask.css'
export default props => {
    return (
        <a href={props.navigation} className={`a-btn ${props.classes}`}>
            {props.children ? props.children :
                (
                    <React.Fragment>
                        <span className="mask-lnk">{props.textContet}</span>
                        <span className="mask-lnk-hover">{props.textContet}</span>
                    </React.Fragment>
                )
            }
        </a>


    );
};