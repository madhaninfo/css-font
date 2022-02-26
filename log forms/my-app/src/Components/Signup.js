import React from "react";
import { useState,useEffect } from "react";
import validation from "./Validation"
import {Useform} from "./Useform"
 
const Signup = ({submitForm}) =>{
    const { handleChange, handleFormSubmit,values,errors } = useForm(submitForm);
    const [values,setValues]=useState({
        fullname:"",
        email:"",
        password:"",
        cpassword:"",
        mobile:"",
        
    });
    const [errors,setErrors]=useState({});
    const[dataIsCorrect,setDataisCorrect]=useState(false);
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        });
    };

    const handleFormSubmit= (event)=>{
        event.preventDefault();
        setErrors(validation(values));
        setDataisCorrect(true);
    };
    useEffect(()=>{
        if (Object.keys(errors).length=== 0 && dataIsCorrect){
            submitForm(true);
        }
    },[errors]);
          return (
            <div className="container">
                <div className="app-wrapper">
                    <div>
                        <h2 className="tittle">create account</h2>
                    </div>
                    <form className="form-wrapper">
                        <div className="name">
                            <label className="label">username</label>
                            <input className="input" type="text"  name="fullname" value={values.fullname} onChange={handleChange} required />
                            {/* <!-- <div class="error" id="nameerr"></div> --> */}
                            {errors.fullname && <p className="error">{errors.fullname}</p>}
                        </div>
                        <div className="password">
                            <label className="label">password</label>
                            <input className="input" type="password" name="password" value={values.password} onChange={handleChange} required />
                            <button class="far fa-eye-slash">show password</button>
                            {errors.password && <p className="error">{errors.password}</p>}



                            {/* <!-- <div class="error" id="passworderr"></div> --> */}
                        </div>
                        <div class="cpassword">
                            <label className="label"> confirm password</label>
                            <input className="input" type="password" name="cpassword" value={values.cpassword} onChange={handleChange} required />
                            <button class="far fa-eye-slash">show password</button>
                            {/* <!-- <div class="error" id="confirimerr"></div> --> */}
                            {errors.cpassword && <p className="error">{errors.cpassword}</p>}

                        </div>
                        <div class="email">
                            <label className="label"> email</label>
                            <input className="input" type="email" name="email" value={values.email} onChange={handleChange} required />
                            {/* <!-- <div class="error" id="emailerr"></div> --> */}
                            {errors.email && <p className="error">{errors.email}</p>}

                        </div>
                        <div className="mobile">
                            <label className="label">mobile number</label>
                            <input className="input" type="text" name="moble" required />
                            {/* <!-- <div class="error" id="nameerr"></div> --> */}
                            {errors.mobile && <p className="error">{errors.mobile}</p>}
                        </div>
                        <div>

                            <button className="submit"  onClick={handleFormSubmit}>Submit</button>
                        </div>


                    </form >
                </div>
            </div>

        

        )
    }



export default Signup;
