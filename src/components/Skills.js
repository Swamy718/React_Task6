import React from 'react';

const Skills = () => {

  return(
    <>
    <h2>Skills</h2>
    <div style={{width:'75%',height:'550px',border:'1px solid #ccc',borderRadius:'5px',margin:'auto',paddingTop:'20px'}}>
    <div className="container">
  <div className="row">
    <div className="col">
      <h3>Web Development</h3>
      <p>Level: Expert</p>

    </div>
    <div className="col">
    <h3>Java</h3>
      <p>Level: Expert</p>
    </div>
  </div>
  <div className="row">
    <div className="col">
    <h3>SQL</h3>
      <p>Level: Intermediate</p>
    </div>
    <div className="col">
    <h3>R</h3>
      <p>Level: Intermediate</p>
    </div>
    <div className="col">
    <h3>Java Script</h3>
      <p>Level: Intermediate</p>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <h3>React</h3>
      <p>Level: Beginner</p>

    </div>
    <div className="col">
    <h3>Cloud computing</h3>
      <p>Level: Beginner</p>
    </div>
  </div>
</div>
<br></br>
<div style={{width:'500px',margin:'auto'}}>
<h4>Programming</h4>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>Fast Learner</h4>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>Ability to work in a team</h4>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>Team leadership</h4>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
</div>
    </>
  )
};

export default Skills;
