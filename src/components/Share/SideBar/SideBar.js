import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://fathomless-harbor-12740.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
         .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
                console.log(data);
            });
    }, [])
    return (
        <div className="d-flex flex-column bg-dark justify-content-between py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard">
                        Welcome
                    </Link>
                </li>
                <li>
                    <Link to="/myrent">
                        My Rent
                    </Link>
                </li>
                {
                    isAdmin && <div>
                        <li>
                    <Link to="addrenthouse">
                        Add Rent House
                    </Link>
                </li>
                <li>
                    <Link to="renthouselist">
                        Rent House List
                    </Link>
                </li>
                <li>
                    <Link to="addadmin">
                        Add Admin
                    </Link>
                </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default SideBar;