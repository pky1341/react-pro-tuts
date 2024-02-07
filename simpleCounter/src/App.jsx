import {useState} from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addvalue=()=>{
    counter++;
    console.log(counter);
    setCounter(counter);
  }
  const removeVal=()=>{
    counter--;
    console.log(counter);
    setCounter(counter);
  }
  return (
    <>
      <p>reactjs tutorial with chai aur code</p>
      <button onClick={addvalue}>Add :- {counter} </button>
      <button onClick={removeVal}>Remove :- {counter}</button>
    </>
  )
}

export default App
