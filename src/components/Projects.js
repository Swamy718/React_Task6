import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bulb from './bulb.jpg';
import leaf from './leaf_decay.jpeg';
import stock from './stock.jpeg';
import rt from './react.jpg';

const Projects = () => {

  return (
    <>
      <h2>Projects</h2>
      <div className='d-flex' style={{width:'75%',margin:'auto'}}>
      <div className="card" style={{width:'400px',marginLeft:'20px'}} >
       <img className="card-img-top" src={bulb}/>
  <div className="card-body">
    <h5 className="card-title">Smart Bulb</h5>
    <p className="card-text">Created a prototype that enables the LED to turn on and off automatically within a 
set period of time, with the option to manually change the timing without the use of 
the IOT</p>
  </div>
</div>
<div className="card" style={{width:'400px',marginLeft:'20px'}} >
       <img className="card-img-top" src={leaf}/>
  <div className="card-body">
    <h5 className="card-title">Leaf Disease Detection</h5>
    <p className="card-text">Using CNN and tranfer learning techniques,developed a model which classifies diseased and healthy leaves.</p>
  </div>
</div>
<div className="card" style={{width:'400px',marginLeft:'20px'}} >
       <img className="card-img-top" src={stock}/>
  <div className="card-body">
    <h5 className="card-title">Stock Market Prediction</h5>
    <p className="card-text">Developed a robust machine learning model to analyze and predict stock market trends, leveraging advanced algorithms such as LSTM and ARIMA</p>
  </div>
</div>
<div className="card" style={{width:'400px',marginLeft:'20px'}} >
       <img className="card-img-top" src={rt}/>
  <div className="card-body">
    <h5 className="card-title">React-Based Web Application</h5>
    <p className="card-text">Led the development of an intuitive web application using React, enabling seamless user interaction and dynamic content rendering.</p>
  </div>
</div>
</div>
</>
      
  );
}

export default Projects;
