import React from 'react';
import loadingGif from '../../../images/loding.gif';

const LoadingGit = () => {
    return (
        <div>
             <div style={{textAlign:"center"}}> 
            <h5 className="h1Style">Data is loding....</h5>
            <img src={loadingGif} alt=""/>
        </div>
        </div>
    );
};

export default LoadingGit;