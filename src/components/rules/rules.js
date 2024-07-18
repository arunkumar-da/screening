import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import './rules.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import clock from '../images/clocks.png';
import code from '../images/code.png';
import file from '../images/file.png';
import lock from '../images/lock.png'
import { Card } from 'antd';
const rules = () => {
 

  return (
    <Card className="rules-card">
        <div className='left'>
            <div className='a'>
        <img className='image'src={file} alt="Company Logo" /> 
            <h2 className='text'>Type:</h2>
            <h3 className='detail'>programming skills</h3>
            
            <Divider className='div'/>
            </div>
            <div className='b'>
            
            <img className='image' src={clock}  alt="Company Logo" />
            <h2 className='text'>Time:</h2> 
            
            
            <h3 className='detail'>
            21:48
            </h3>
            
            <Divider className='div'/>
            
            </div>
            <div className='c'>
            <img  className='image' src={code} alt="Company Logo" />
            <h2 className='text'>Type:</h2>
            <h3 className='detail'>
            English, Spanish, French,<br></br>
 Italian, Japanese, Dutch,<br></br>
 Portuguese
            </h3>
            <Divider className='div'/>
            </div>
            <div className='d'>
            <img className='image' src={lock} alt="Company Logo" />
            <h2 className='text'>value:</h2>
            <h3 className='detail'>programming skills</h3>
            
        </div>
      </div>
      <div className='rh'>
      <h2 className='rh'style={{ color: 'rgba(105, 121, 248, 1)' }}>Summary of the React Test</h2>
            <p className='rp'>This React test assesses candidates’skills in the React.js library. The test evaluates candidates in the most important concepts in React.This React test assesses candidates’skills in the React.js library. The test evaluates candidates in the most important concepts in React .This React test assesses candidates’skills in the React.js library. The test evaluates candidates in the most important concepts in React  </p>
            
            <h2 className='r2'style={{ color: 'rgba(105, 121, 248, 1)' }}>Covered Skills</h2>
            <p className='pl'>React Hooks</p>
            <p className='pl'>Design Patterns</p>
            <p className='pr1'>Python</p>
            <p className='pr2'>Java</p>
            <h2 className='r3'style={{ color: 'rgba(105, 121, 248, 1)' }}>Use the React test to hire</h2>
            <p className='rp'>This React test assesses candidates’skills in the React.js library. The test evaluates candidates in the most important concepts in React.This React test assesses candidates’skills in the React.js library.   </p>
            <Link to="/quiz">  <button className='button'>Get Started</button></Link>
      </div>
      </Card>
  )
};

export default rules;
