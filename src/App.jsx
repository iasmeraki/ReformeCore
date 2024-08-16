
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Paletas from './components/Paletas'
import Principal from './components/Principal'
import Conta from './components/Conta'
import Decoração from './components/Decoração'


function App() {
 

  return (
    <>
      <Header/>
      
      
      

      <Routes>

          <Route path="/" element={<Principal/>} />

          <Route path="/Paletas" element={<Paletas/>} />

          <Route path="/Conta" element={<Conta/>} />

          <Route path="/Decorações" element={<Decoração/>} />

      </Routes>

        

      <Footer/>
        
    </>
  )
}

export default App
