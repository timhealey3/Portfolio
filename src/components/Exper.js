import React from 'react';
import './Exper.css';

const Exper = () => {
  return (
    <section id='exper'>
      <span className='skillTitle'>About Me</span>
      <span className='skillDesc'>I am currently looking for a software engineering job</span>
      <div className="skillBar">
        <img src='images/wmu.png' alt='Education' className='skillBarImg' />
        <div className="skillBarText">
          <h2>Education</h2>
          <p>BS in Computer Science, 3.54 GPA, 2019-2024</p>
        </div>
      </div>
      <div className="skillBar">
        <img src='images/tgw.png' alt='Work' className='skillBarImg' />
        <div className="skillBarText">
          <h2>Work Experience</h2>
          <p>TGW North America: Software Engineer Intern</p>
        </div>
      </div>
      <div className="skillBar">
        <img src='images/JavaScript-logo.png' alt='Skills' className='skillBarImg' />
        <div className="skillBarText">
          <h2>Skills</h2>
          <p>Javascript, Python, React, React Native, C#</p>
        </div>
      </div>
    </section>
  )
}

export default Exper