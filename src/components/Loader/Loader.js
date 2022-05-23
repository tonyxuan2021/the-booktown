import React from 'react';
import "./Loader.scss";

const Loader = (props) => {
    return (
        <div className='overlay'>
            <div className='loader'>{props.children}</div>
        </div>
    );
};

export default Loader;