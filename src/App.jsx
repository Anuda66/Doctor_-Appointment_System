import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Docotor from './Pages/Docotor';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/doctor' element={<Docotor/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
