import { useState,useEffect } from "react";
import validation from "./Validation"


 const useForm =(submitForm)=>{

    }
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
    return{handlechange,handleFormSubmit,values,errors}
};
export default useForm;