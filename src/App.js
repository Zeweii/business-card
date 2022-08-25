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
                                </div>      

                                <div className="media-footer">
                                        <div className="github"></div>
                                </div>
                        </div>


                </div>
        </div>
        );
}
    