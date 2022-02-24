import { useState } from "react";
import Signup from "./Signup";
import Success from "./Success";

const Form =()=> {
    const[formIsSubmitted, setFormIsSubmitted]=useState(false)
    const submitForm=()=>{
        setFormIsSubmitted(true);
    }
    return(
        <diV>
            {!formIsSubmitted? (<Signup submitForm={submitForm}/>):(<Success/>)}

        </diV>
    );

};
export default Form;



