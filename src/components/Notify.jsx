import React, { useState } from 'react';

import style from './css/notify.module.css';

function Notify() {
  const [number, setNumber] = useState(1);
  const [event, setEvent] = useState('มีคนกำลังสลบ');
  const [eventNumber, setEventNumber] = useState(150);
  const [location, setLocation] = useState('Elgin Ave');
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.number}>
          <div>{number}</div>
        </div>
        <div className={style.content}>
          <img src='./Imgs/handcuffs.png' alt='Handcuffs Image' width='80vh' height='80vh'/>
          <div className={style.info}>
            <div className={style.first}>
              เกิดเหตุ : {event}
              <div className={style.address}> 
                # {eventNumber}
              </div>
            </div>
            <div className={style.second}>
              <img src='./Imgs/location.png' alt='Location Image' width='20vh' height='20vh'/>
              <div className={style.address}> 
                @ {location}
              </div>
            </div>
            <div className={style.third}>
              กดปุ่ม 
              <div>SHIFT</div> + 
              <div>1</div>
              เพื่อไปยังจุดเกิดเหตุ
            </div>
          </div>
        </div>
        <div className={style.mark}>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Notify