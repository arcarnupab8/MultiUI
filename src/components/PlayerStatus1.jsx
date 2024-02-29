import React, { useState } from 'react';

import style from './css/playerstatus1.module.css';

function PlayerStatus1() {
  const [userID, setUserID] = useState(9999);
  const [userName, setUserName] = useState('BACON TOWN');
  const [phoneNumber, setPhoneNumber] = useState('99999999');
  const [job, setJobs] = useState('unemploed');
  const [attribute1, setAttribute1] = useState(999);
  const [attribute2, setAttribute2] = useState(999);
  const [attribute3, setAttribute3] = useState(999);
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.profile}>
          <div className={style.image}>
            <img src='./Imgs/policeman.png' alt='Profile image' width='80vh' height='80vh'/>
          </div>
          <div className={style.userid}>
            ID : {userID}
          </div>
        </div>

        <div className={style.info}>
          <div className={style.contentTop}>
            <div className={style.textbox}>
              <div>NAME : {userName}</div>
              <img src='./Imgs/profile.png' width='20vh' height='20vh'/>
            </div>
            <div className={style.textbox}>
              <div>Phone Number : {phoneNumber}</div>
              <img src='./Imgs/phone-call.png' width='20vh' height='20vh'/>
            </div>
            <div className={style.textbox}>
              <div>Jobs : {job}</div>
              <img src='./Imgs/suitcase.png' width='20vh' height='20vh'/>
            </div>
          </div>

          <div className={style.contentBottom}>
            <div className={style.couter}>
              <img src='./Imgs/suitcase.png' alt='Image' width='25vh' height='25vh'/>
              <div>{attribute1}</div>
            </div>
            <div className={style.couter}>
              <img src='./Imgs/phone-call.png' alt='Image' width='25vh' height='25vh'/>
              <div>{attribute2}</div>
            </div>
            <div className={style.couter}>
              <img src='./Imgs/profile.png' alt='Image' width='25vh' height='25vh'/>
              <div>{attribute3}</div>
            </div>
          </div>
        </div>

        <div className={style.logo}>
          <img src='./Imgs/doctor.png' alt='Logo Image' width='200vh' height='200vh'/>
        </div>
      </div>
    </div>
  )
}

export default PlayerStatus1