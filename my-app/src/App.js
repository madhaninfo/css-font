import React from 'react';
import './App.css'
import Form from "./Components/Form";
import Signup from './Components/Signup';
// import Usestate from './Usestate';
// import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Input from "@material-ui/core/Input";
// import Usestate from './Components/Usestate';


function App() {
  // const App1= () => {
  //       const [values, setValues] = React.useState({
  //           password: "",
  //           showPassword: false,
  //       });
        
  //       const handleClickShowPassword = () => {
  //           setValues({ ...values, showPassword: !values.showPassword });
  //       };
        
  //       const handleMouseDownPassword = (event) => {
  //           event.preventDefault();
  //       };
        
  //       const handlePasswordChange = (prop) => (event) => {
  //           setValues({ ...values, [prop]: event.target.value });
  //       };
  return (
   <div>
      <Form />
    <Signup/>
    </div>
  );
}



export default App;
