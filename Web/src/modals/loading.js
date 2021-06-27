import React from 'react';
import '../styles/loading.css';

const Loading = () => {
    return (
        <div id="loading-container">
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    );
}

export default Loading;