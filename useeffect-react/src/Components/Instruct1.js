
import { useState,createContext, useContext} from "react";


const UserContext = createContext();
export function Instruct1() {
  const [user] = useState("manoj");
 return (
    <UserContext.Provider value={user}>
     <h1>{`Hello ${user}!`}</h1>
      <Instruct2 user={user} />
      </UserContext.Provider>
  );
}
export default Instruct1;


export function Instruct2() {
  return (
    <>
      <h1>component 2</h1>
      <Instruct3 />
    </>
  );
}

export function Instruct3() {
  return (
    <>
      <h1>component 3</h1>
      <Instruct4 />
    </>
  );
}
export function Instruct4() {
  return (
    <>
      <h1>Component 4</h1>
      <Inst/>
    </>
  );
}

export function Inst() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>inst5</h1>
      <h2>{`Hello hhjhj ${user} again!`}</h2>
    </>
  );
}
