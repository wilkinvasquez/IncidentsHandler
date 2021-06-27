import React from 'react';
import '../styles/template-styles/main-template-styles.css';
import Header from '../elements/header';
import Menu from '../elements/menu';
import '../styles/main.css';

const MainTemplate = (props) => {
    return (
        <div id="main-template-container" className="row no-gutters">
            <div className="col-lg-2 col-md-4 col-sm-4">
                <Menu />
            </div>

            <div id="main-template-header-children-container" className="col-lg-10 col-md-8 col-sm-8">
                <Header />

                <div id="main-template-children-container">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default MainTemplate;