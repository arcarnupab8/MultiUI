import React, { useEffect, useState } from 'react';

import style from './css/contentjob.module.css';

function ContentJob({ Img, name, num }) {
  const [color, setColor] = useState('');
  useEffect(() => {
    if(name === 'ตำรวจ'){
      setColor('blue');
    }
    if(name === 'หมอ'){
      setColor('red');
    }
    if(name === 'สภา'){
      setColor('yellow');
    }
  }, [])
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.image}>
          <img src={`./Imgs/`+Img} alt='Job Image' width='70vh' height='70vh'/>
        </div>
        <div className={style.info}>
          <div>{name}</div>
          <div style={{ color }}>{num}</div>
        </div>
      </div>
    </div>
  )
}

export default ContentJob