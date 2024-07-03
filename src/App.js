import { Route, Routes } from 'react-router-dom'

import './App.css'
import SideBar from './components/SideBar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Technologies from './components/Technologies'
import Education from './components/Education'

function App() {
  return (

    <div className='main'>
      <div className='left'><SideBar/></div>
      <div className='right'>
      <Routes>
          <Route path="/" element={<Profile/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/certifications" element={<Certifications/>}/>
          <Route path="/codingprof" element={<CodingProfiles/>}/>
          <Route path="/lang" element={<Technologies/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App