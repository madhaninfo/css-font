import {  useRef } from "react";
            function App() {
                // const [inputValue, setInputValue] = useState("");
                const InputElement= useRef();
              
                const focusInput=() => {
              InputElement.current.focus();
                };
              
                return (
                  <>
                    {/* <input
                      type="text" ref={InputElement}/> */}
                     <button onClick={focusInput}>focus</button>
                  
                    {/* <h1>Render Count: {count.current}</h1> */}
                  </>
                );
              }
        
    
    

export default App;
