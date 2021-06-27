import React from 'react';
import '../styles/elements-styles/items-header-styles.css';
import { tsPropertySignature } from '@babel/types';

const ItemsHeader = (props) => {
    return (
        <div className="items-header">
            <div className="items-header-text-left">
                {props.textLeft}
            </div>

            <div className="items-header-text-right">
                {props.textRight}
            </div>
        </div>
    );
}

export default ItemsHeader;