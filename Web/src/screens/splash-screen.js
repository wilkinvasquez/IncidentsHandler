import React from 'react';
import '../styles/screens-styles/splash-screen-styles.css';

const SplashScreen = () => {
    return (
        <div className="splash-screen-container">
            <div id="splash-screen-sub-container">
                <img id="splash-screen-imagotype" src={require('../assets/images/incidents-handler-imagotype.png')} alt="" />

                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>
        </div>
    );
}

export default SplashScreen;