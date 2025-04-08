import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./component/Header";
import MainContent from './component/Main';
import Footer from './component/Footer'
import Navbar from './component/Navbar';
import MainBody from './component/MainBody';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <MainBody/>
    </>
  )
}



export default App
