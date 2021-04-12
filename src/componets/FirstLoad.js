import React from 'react'
import './FirstLoad.css'

import image from '../assets/img/wfh_1.svg'

export default function FirstLoad() {
    return (
        <div className="firstLoad" >
            <p className="firstLoad_p" >No todos yet</p>
            <img src={image} alt="Ilustration"/>


        </div>
    )
}
