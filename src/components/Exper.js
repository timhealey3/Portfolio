import React from 'react';
import './Exper.css';

const Exper = () => {
  return (
    <section id='exper'>
      <span className='skillTitle'>About Me</span>
      <span className='skillDesc'>I am currently working on a temporary contract for Brooksource. Where I work at Auto Owners Insurance as a Java dev!</span>
      <div className="skillBar">
        <img src='images/wmu.png' alt='Education' className='skillBarImg' />
        <div className="skillBarText">
          <h2>Education</h2>
          <p>BS in Computer Science, 3.60 GPA, 2019-2024</p>
        </div>
      </div>
      <div className="skillBar">
        <img src='images/tgw.png' alt='Work' className='skillBarImg' />
        <div className="skillBarText">
          <h2>Work Experience</h2>
          <p>Auto-Owners Insurance [Contracted by Brooksource]: Associate Software Developer/p>
          <p>TGW North America: Software Engineer Intern</p>
        </div>
      </div>
      <div className="skillBar">
        <img src='images/c++.png' alt='Skills' className='skillBarImg' />
        <div className="skillBarText">
          <h2>Skills</h2>
          <p>C++, C, Java, Python, Javascript</p>
        </div>
      </div>
    </section>
  )
}

export default Exper
