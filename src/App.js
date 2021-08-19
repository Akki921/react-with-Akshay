
import './App.css';
import About from './copmponets/About';
import Navbar from './copmponets/Navbar';
import TextForm from './copmponets/TextForm';
import React, { useState } from 'react'
import Alert from './copmponets/Alert';


function App() {
  const [Mode, setMode] = useState('dark')
  const [newmode, setNewmode] = useState('success')
  const [alert, setAlert] = useState(null)

  const ShowAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
   }
 
  const ToggleMode = () => {
    if (Mode === 'light')
    {
     setMode('dark')
      document.body.style.backgroundColor = ' #182d56d9'
      ShowAlert("Dark Mode has been  Enable", "success")
    }
 else  {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      ShowAlert("Light Mode has been  Enable","success")
    }
 }
 
  return (
    <>
      <Navbar Title="TextUtil" About="About Us" Home="HOME" mode={Mode} toggleMode={ToggleMode}  />
      <div className="container">
        <Alert alert1={alert }/>
      </div>
      <div className="container ">
        <TextForm Heading="Enter The Text" Placeholder="Add Some Input" mode={Mode} showAlert={ShowAlert}/>
      </div>
      <div className="container ">
        <About Title="About Us" mode={Mode} newMode={newmode} />
      </div>
      
</>
  );
}

export default App;
