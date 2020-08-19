import React, { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
} from "react-router-dom";

const Main = () => {
    return (
        <>
            <div className="card-group">
                <div className="card">
                    <img src="./Images/smalloils1.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <Link onClick={() => console.log('clicked')} to={'/oils'}>
                            <h5 className="text-center p-2" id="link"> Search by Oils</h5>
                        </Link>
                        {/* <h5 className="card-title">Search by Oils</h5> */}
                        <p className="card-text">Find out information on specific essential oils.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./Images/smallest.png" className="card-img-top" alt="..."></img>
                    {/* <img src="./Images/white.png" className="card-img-top" alt="..."></img> */}
                    <div className="card-body">
                    <Link onClick={() => console.log('clicked condition')} to={'/condition'}></Link>
                        {/* <h5 className="card-title">Search by condition</h5> */}
                        <p className="card-text">See which oils can help remedy specific problems.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./Images/oils1.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
       
                    </>
    )
}

export default Main
