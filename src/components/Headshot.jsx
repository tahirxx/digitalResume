import React from "react"
import headshot from "../images/Headshot2.jpg"

function Headshot() {
    return (
    <div className='head-shot'>
        <img src={headshot} alt="headshot" className="photo" />
    </div>
);
}

export default Headshot;
