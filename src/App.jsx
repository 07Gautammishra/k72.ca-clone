import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navbar/Navbar'
import FullScreenNav from './components/Navbar/FullScreenNav'
import Contact from './pages/Contact'
import Blogue from './pages/Blogue'


const App = () => {
  const currntPath = useLocation().pathname
  return (
    <div>
      <Navbar logoColor={currntPath === '/' || currntPath === "/contact" ? "white" : "black"} />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogue' element={<Blogue />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
