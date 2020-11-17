import React, { useState, useEffect } from 'react';
import SideBar from '../../Share/SideBar/SideBar';

const AllBookingList = () => {

    const [status, setStatus] = useState("");
    const [loding, setLoding] = useState(false);
    const [color, setColor] = useState("red");
    const [allbookingList, setAllBookingList] = useState([])
    
    useEffect(() => {
        fetch('https://fathomless-harbor-12740.herokuapp.com/allBookingList')
        .then(res => res.json())
        .then(data => {
            setAllBookingList(data)
            console.log(data);
        })
    }, [])

    const handleChange = (event, id) => {

        setAllBookingList([])

        fetch(`https://fathomless-harbor-12740.herokuapp.com/updateOrderStatus/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: event.target.value })

        }).then(res => {
            setLoding(loding)

        })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>       
                <section className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                <table className="table table-borderless">
                <thead>
                    <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Phone No</th>
                    <th className="text-secondary" scope="col">Message</th>
                    <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                      allbookingList.map((bookingList, index) =>
                            
                        <tr key={index}>   
                            <td>{index + 1}</td>
                            <td>{bookingList.name}</td>
                            <td>{bookingList.email}</td>
                            <td>{bookingList.number}</td>
                            <td>{bookingList.message}</td>
                            <td>
                            {
                                bookingList.status == "On Going" ? (
                                <select name="status" id="status" style={{ color: 'yellow',border:"none" }} onChange={(e) => handleChange(e, bookingList._id)} value={bookingList.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>
                                ) : (
                                bookingList.status == "Done" ? (
                                <select name="status" id="status" style={{color: `green`,border:"none" }} onChange={(e) => handleChange(e, bookingList._id)} value={bookingList.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>
                                ) : ( <select name="status" id="status" style={{ color: 'red',border:"none" }} onChange={(e) => handleChange(e, bookingList._id)} value={bookingList.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>)
                                )
                            }   
                            </td>
                            
                        </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            </section>
        </div>
    );
};

export default AllBookingList;