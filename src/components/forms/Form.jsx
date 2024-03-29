import React from "react";
import "./Form.scss"

function Form() {
    return <>
        <form action="" className="form">
            <div className="row">
                <div className="col-md-6">
                    <div className="inputField">
                        <label htmlFor="">First name</label>
                        <input type="text" className="form-control" placeholder="Enter First Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputField">
                        <label htmlFor="">Last name</label>
                        <input type="text" className="form-control" placeholder="Enter Last Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputField">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputField">
                        <label htmlFor="">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter Phone Number" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="inputField">
                        <label htmlFor="">Address 1</label>
                        <input type="text" className="form-control" placeholder="Enter Address" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="inputField">
                        <label htmlFor="">Address 2</label>
                        <input type="text" className="form-control" placeholder="Enter Address" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="inputField">
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Message"></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="inputField">
                        <label htmlFor="">City</label>
                        <select name="" id="" className="form-control">
                            <option value="">City Name</option>
                            <option value="">City Name</option>
                            <option value="">City Name</option>
                            <option value="">City Name</option>
                            <option value="">City Name</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputField">
                        <label htmlFor="">State</label>
                        <select name="" id="" className="form-control">
                            <option value="">State Name</option>
                            <option value="">State Name</option>
                            <option value="">State Name</option>
                            <option value="">State Name</option>
                            <option value="">State Name</option>
                        </select>
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <button className="btn btn-dark">Submit</button>
                </div>


            </div>
        </form>
    </>
}
export default Form;