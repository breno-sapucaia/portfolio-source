import React, { Component } from 'react';
// eslint-disable-next-line
import Header from './resources/components/header/Header'
import Monitor from './resources/components/monitor/Monitor'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="app">
                <div className="custom-background"></div>
                <Header />
                <div className="main">
                    <section className="section-center">
                        <Monitor />
                    </section>


                    {/* <Typed strings={strings} /> */}
                </div>
            </div>
        );
    }
}
// eslint-disable-next-line



export default App;