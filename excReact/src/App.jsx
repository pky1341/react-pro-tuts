// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';
function App() {
  let myOb={
    name:"pradiep",
    email:"pradiep@kumar.com"
  }

  return (
    <>
      <p className='bg-green-400 p-5 text-2xl'>hello guys i am pradiep kumar</p>
      <Card obj="pradiep" btnText="click Me!"/>
      <Card obj="kumar" btnText="visit"/>
    </>
  )
}

export default App
