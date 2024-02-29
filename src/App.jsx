import './App.css'
import Home from './pages/Home'
import Hill from './pages/Hill'
import Offer from './pages/Offer'
import Sites from './pages/Sites'
import Contact from './pages/Contact'
import Navbar from './components/common/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <header>
      <Navbar />  
      <Routes>
          <Route path="/" element={<Home />} />            
          <Route path="/hill" element={<Hill />} />
          <Route path="/offer" element={<Offer />} />          
          <Route path="/sites" element={<Sites />} />          
          <Route path="/contact" element={<Contact />} />
          
      </Routes>        
    </header>
  )
}

export default App
