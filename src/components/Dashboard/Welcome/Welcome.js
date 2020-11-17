import React, { useContext } from 'react';
import SideBar from '../../Share/SideBar/SideBar';
import { UserContext } from '../../../App';

const Welcome = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row container">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
            <h1>Welcome.................{loggedInUser.name} </h1>
            </div>
        </div>
        </div>
    );
};

export default Welcome;