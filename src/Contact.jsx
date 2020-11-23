import React from "react";
import { useState } from "react";

const Contact = () => {
    const [data, setData] =useState({
        fullName : "",
        email :"",
        phone:"",
        msg:"",

    })
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is - ${data.fullName} My phone is ${data.phone}`);
    }

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData ((preVal) => {
            return {
                ...preVal,
                [name] :value,
            }
        }
        )

    }
    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>

        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">नाम </label>
                            <input name = "fullName" value ={data.fullName} onChange={InputEvent}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="अपना पूरा नाम लिखें " />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">ई-मेल</label>
                            <input name = "email" value ={data.email} onChange={InputEvent}  type="email" className="form-control" id="exampleFormControlInput1" placeholder="अपने ई-मेल लिखें " />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">मोबाइल नम्बर </label>
                            <input name = "phone" value ={data.phone} onChange={InputEvent}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="अपना मोबाइल नम्बर लिखें " />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">संदेश </label>
                            <textarea name = "msg" value ={data.msg} onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="अपना संदेश लिखें "></textarea>
                        </div>
                        <div class="col-12">
                            <button className ="btn btn-primary" type="submit">अपना संदेश भेजें </button>
                        </div>
                    </form>

                </div>


            </div>

        </div>
    </>);
};

export default Contact;