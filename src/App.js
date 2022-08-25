import React from "react"
import './App.css';

export default function App() {
    return (
        <div className="App">
            <div className="box">
                <div className="content">
                    <img className="image" src="/photo.png" />
    
                    <div className="description-box" >
                        <h3 className="card-name">Zachary Jiang</h3>
                        <h5 className="card-occupation">Software Developer</h5>
                        <p className="card-website"> zacharyjiang.website</p>

                        <div className="card-container">
                            <p className="card-email">Email</p>
                            <p className="card-linkedin">LinkedIn</p>
                        </div>

                        <div className="card-about">About</div>
                            <p className="about-text">
                                I am an aspiring software developer with a growing interest in 
                                graphical design, UX design and making things
                                look cool! I am studying lots of classes and videos so I can make a cool project!
                            </p>
                        
                        <div className="card-interests">Interests</div>
                            <p className="interests-text">
                                My interests include playing lots of sports - mainly volleyball and badminton! 
                                I also have a hobby in custom mechanical keyboards, cooking and manga.
                            </p>
                       
                    </div>
                    <div className="media-footer">
                    </div>
                </div>


            </div>
        </div>
        );
}
    