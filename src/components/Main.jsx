
import React from "react";
import Buttons from "./Buttons";

function Main() {
    return (
        <div className='main'>
            <h1>Urji Tahir</h1>
            <h2 className="role">Full Stack Developer</h2>
            <h3>utahir2@gmail.com</h3>

            <div> 
                <Buttons />
                </div> 

            <div className="about">
                <h2>About</h2>
                <p>I am a full stack developer with a passion for creating web applications and 
                    software solutions. I'm proficient in both front-end and back-end technologies, I enjoy tackling complex problems, working collaboratively in agile teams, and staying up-to-date with the latest trends in web development to deliver innovative and efficient solutions.</p>
                     
                <h2>Interests</h2>
                <p>Everything tech. Food/Ethiopian stew. Coffee fanatic. Reader/Podcaster. Family time.</p>
            </div>
        </div>
    );
}

export default Main;