
import './App.css';
import About from './copmponets/About';
import Navbar from './copmponets/Navbar';
import TextForm from './copmponets/TextForm';
import React, { useState } from 'react'
import Alert from './copmponets/Alert';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



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
     
      {/* all content shoould be under thr router to navigate */}
      <Router>
         <Navbar Title="TextUtil" About="About Us" Home="HOME" mode={Mode} toggleMode={ToggleMode}  />
      
        <div className="container">
        <Alert alert1={alert }/>
      </div> 
      {/* //use switch to switch components  */}
        <Switch>
          {/* hre use exact to check the exact route of link or path to navigate */}
          <Route exact path="/about">
            <div className="container my-5">
            <About Title="About Us" mode={Mode} newMode={newmode} />
            </div>
          </Route>
          <Route exact path="/">
            <div className="container my-5">
            <TextForm Heading="Enter The Text" Placeholder="Add Some Input" mode={Mode} showAlert={ShowAlert} />
            </div>
         </Route>
        
        </Switch>
  
      </Router>
</>
  );
}

export default App;
