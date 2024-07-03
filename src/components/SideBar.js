import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <><div className="sidebar">
    <div className="con1">
      <img src="web-programming.png" />
    </div>
    <div className="con2">
      <Link to="/"><img src="woman.png" /></Link>
      <Link to="/education"><img src="scholarship.png" /></Link>
      <Link to="/lang"><img src="transparent.png" /></Link>
      <Link to="/projects"><img src="project.png" /></Link>
      <Link to="/certifications"><img src="award.png" /></Link>
      <Link to="/codingprof"><img src="profile.png" /></Link>
    </div>
  </div>
  </>
  )
}

export default SideBar