import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";

const Navbar = () => {

    const [url, setUrl] = useState('');

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" >
                    <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/'}>Home
                </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/oils'}>Oils</Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/condition'}>Condition</Link>
                </div>

                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div> */}
               
            </nav>
        </div>
    )
}

export default Navbar
