import React from 'react';
import './Header.css'
import ButtonMask from './../button-mask/ButtonMask'
export default props => {
    return (
        <header className="header">

            <div className="container">
                <div className="row c-row">
                    <ButtonMask classes="col-md-2" navigation="#">
                        <span className="mask-lnk">Breno <span className="text-c-white">Sapucaia</span></span>
                        <span className="mask-lnk-hover">Download <span className="text-c-white">CV</span></span>
                    </ButtonMask>
                    <nav className="col-md-10 d-flex  justify-content-md-end">
                        <ButtonMask navigation="#Home" textContet="Home" classes="mr-5" />
                        <ButtonMask navigation="#Resume" textContet="Resume" classes="mr-5" />
                        <ButtonMask navigation="#Skills" textContet="Skills" classes="mr-5" />
                        <ButtonMask navigation="#Contact" textContet="Contact" classes="mr-5" />
                    </nav>
                </div>
            </div>





        </header>
    );
}