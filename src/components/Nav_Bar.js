import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from 'react-router-dom';
import profile from './profile.jpg';

const Nav_Bar = () => {
  return (
    <>
    <div style={{width:'auto',border:'1px solid black',borderRadius:'20px',backgroundColor:'#ccc'}}>
    <img src={profile} style={{borderRadius:'50%',width:'200px',boxShadow:'0 0  20px black'}}/>
    <h1 >POTHABATTULA SWAMY</h1>
    <p >PROGRAMMER</p>
    </div>
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <Link to="/" style={{ textDecoration: 'none' }}>About me</Link>
      </li>
      <li className="nav-item">
      <Link to="/education" style={{ textDecoration: 'none' }}>Education</Link>
      </li>
      <li className="nav-item">
        <Link to="/skills" style={{ textDecoration: 'none' }}>Skills</Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
      </li>
    </ul>
   </>
  )
}

export default Nav_Bar;
