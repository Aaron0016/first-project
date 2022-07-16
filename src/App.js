import { useState } from "react";

function App() {

  const[show,setShow] = useState(false)
  
  return (
    <div style={{
      backgroundColor: "red"
    }}>
    <button onClick={()=>{
      setShow(!show)
    }}> button </button>
    <p>{show? "hello world":"bye world"}</p>
    </div>
  );
}

export default App;
