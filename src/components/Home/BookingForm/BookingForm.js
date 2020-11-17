import React from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = (props) => {
    console.log(props);
    const {name, price} = props
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://fathomless-harbor-12740.herokuapp.com/addBooking  ', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })       
            if (data) {
                alert('Your requrest successfully Submited')
            } 
        
       };
   
    return (
        <div>
            <section className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control m-2" name="name" placeholder="Your Full Name" id="exampleFormControlSelect2" type="text" ref={register({ required: true })}/>
                    <input className="form-control m-2" name="number" placeholder="Your Phone Number" id="exampleFormControlSelect2" type="text" ref={register({ required: true })}/>
                    <input className="form-control m-2" name="email"  placeholder="Email" id="exampleFormControlSelect2" type="text" ref={register({ required: true })}/>
                    <input defaultValue={name} className="form-control m-2" name="house" placeholder="House Name" type="text" ref={register({ required: true })}/>
                    <input defaultValue={price} className="form-control m-2" name="price" placeholder="Price" type="text" ref={register({ required: true })}/>
                    <textarea className="form-control m-2" name="message" id="exampleFormControlTextarea1" placeholder="Write Your Message" style={{height: '200px'}} rows="3" ref={register({ required: true })}></textarea>
                    <button className="form-control m-2 bg-primary text-white" type="submit">Request Booking</button>
                </form>
            </section>
       
        </div>
    );
};

export default BookingForm;