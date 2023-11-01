import React from "react"  
import fb from '../images/fb.png' 
import github from '../images/github.png' 
import insta from '../images/insta.png' 
import twit from '../images/twit.png' 


function Media() {
    return (
        <div className='medialinks'>
        <div>
            <img src={fb} alt="Facebook" className="fb-icon"/>
        </div>
        <div>
            <img src={github} alt="GitHub" className="media-icon" />
        </div>
        <div>
            <img src={insta} alt="Instagram" className="media-icon" />
        </div>
        <div>
            <img src={twit} alt="Twitter" className="twit-icon" />
        </div>
    </div>
    );
}

export default Media;
