import React, { useState } from 'react';

import style from './css/jobs.module.css';
import ContentJob from './ContentJob';
import { nameJobs, imageJobs, numberJobs } from './dataJob';

function Jobs() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.content}>
          {nameJobs.map((name, index) => (
            <ContentJob key={index} 
            Img={imageJobs[index]} 
            name={name}
            num={numberJobs[index]}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs