import React, { useEffect, useState, useContext } from 'react';
import SideBar from '../../Share/SideBar/SideBar';
import { UserContext } from '../../../App';

const MyRent = () => {
    const [mybookingList, setMyBookingList] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    useEffect(() => {
        fetch('https://fathomless-harbor-12740.herokuapp.com/myBooking?email='+ loggedInUser.email, 
        )
       
        .then(res => res.json())
        .then(data => {
            setMyBookingList(data)
            console.log(data);
        })
    }, [])
    return (
        <div className="row container d-flex justify-content-center">
            <div className="col-sm-3">
                <SideBar></SideBar>
                </div>
                <div className="col-sm-6">
                <div className="row d-flex justify-content-center">
                <table className="table table-borderless">
                <thead>
                    <tr>
                   
                    <th className="text-secondary" scope="col">House Name</th>
                    <th className="text-secondary" scope="col">Price</th>           
                    <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                
                {
                    mybookingList.map((bookingList, index) =>
                        <tr key={index}> 
                            <td>{bookingList.house}</td>
                            <td>$ {bookingList.price}</td>
                            <td>Action</td>
                        </tr>  
                )}
                    
                </tbody>
            </table>
                </div>
            </div>
    </div>
    );
};

export default MyRent;