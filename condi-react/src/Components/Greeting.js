import { UserGreeting,GuestGreeting } from './GuestGreeting';
   function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }else{
    return <GuestGreeting />;
    }
  }
  export default Greeting; 