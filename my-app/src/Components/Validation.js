
const validation = (values) => {
    let errors = {};
    
    if (!values.fullname) {
        errors.fullname = "Name is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } 
    // else if(!/\s+@\s+/.test(values.email))
    // {
    //  errors.email = "email is invalid";

    // }
    if (!values.password) {
        errors.password = "password is required";
    } else if(values.password.length < 6)
    {
        errors.password = " password must be more than six characters";
    }
    if (!values.cpassword) {
        errors.cpassword = "password is required";
    } else if(values.cpassword.length < 6)
    {
        errors.cpassword = " password must be more than six characters";
    }
    
    // if (!values.mobile) {
    //    
    // }
    // if(mobile.length != 10) {
    //     window.alert("Phone number must be 10 digits.");
    //     mobile.focus();
    //     return false;
    // }
    // errors.mobile = "mobile number is required";
    
    return errors;
};
export default validation;