import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Terminal from "./components/Terminal";
import Input from "./components/Input";

function App() {
  //const [flag,setFlag] = useState(false)
  // if (flag === true){
  //   return (
  //     <>
  //     <Terminal text={<Button flag={flag} setFlag={setFlag} />} />
  //     </>
  //   );
  // }
  // else{
  //   return(
  //     <>
  //     <Header/>
  //     <Button flag={flag} setFlag={setFlag}/>
  //     </>

  //   )
  // }
  const [colors, setColors]=useState([])
  const [bgcol, setBgcol]=useState();
  const styl = {
    backgroundColor:bgcol,
    height:"100vh",
    display:'flex',
    width:'100vw',
  }
  return(
    <div style={styl}>
      <Input setBgcol={setBgcol} setColors={setColors} colors={colors}/>
      
    </div>
    
  )
}

export default App;
