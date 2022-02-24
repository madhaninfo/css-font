

import {Blue,Red,Black} from "./Components/Black";
var manoj={
  Firstname:"hello react js",
  Lastname:"react js1",
};
function App() {
  return (
    <div>
    <h1>jj</h1>
    <Blue manoj={manoj.Lastname} />
    <Red />
    <Black/>
    </div>
  );
}
export default App;




