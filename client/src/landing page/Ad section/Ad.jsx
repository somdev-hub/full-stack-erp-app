import React from 'react'
import './Ad.css'
import adImg from '../../files/Group 304.svg'

const Ad = () => {
  return (
    <div className='ad-container'>
        <div className="bubble8"></div>
        <div className="bubble9"></div>
        <div className="bubble10"></div>
        <div className="ad-image">
            <img src={adImg} alt="" />
        </div>
    </div>
  )
}

export default Ad