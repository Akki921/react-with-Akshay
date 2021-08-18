
import './App.css';
import Navbar from './copmponets/Navbar';
import TextForm from './copmponets/TextForm';
function App() {
  return (
    <>
      <Navbar Title="TextUtil" About="About Us" Home="HOME" />
      <div className="container ">
        <TextForm Heading = "Enter The Text" Placeholder="Add Some Input" />
      </div>
</>
  );
}

export default App;
