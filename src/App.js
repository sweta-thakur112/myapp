
import { useState } from 'react';
import './App.css';
import Navbar from './compo/Navbar';
import Textform from './compo/Textform';


function App() {
  const[mode,setmode]= useState("white");
  const togglemode =()=>
  {
    if(mode==="dark")
    {
      setmode("light");
      document.body.style.backgroundColor="white";
    }
    else
    {
      setmode("dark");
      document.body.style.backgroundColor="#042743";
    }

  }
  return (
    <>
    
<Navbar title="Textutil" mode={mode} togglemode={togglemode}></Navbar>
<div className='container my-3'>
<Textform heading="Enter text to analyse" mode={mode}></Textform>
</div>

    </>
    
  );
}

export default App;
