import React from 'react'
// import './DropDown.css'
import './index.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className='main'>
            <div className='main-card'>
                <div className='blue-card'>
                    <h2>Should you use a dropdown?</h2>
                    <div className="nav-item dropdown">
                        <button className=" dropdown-toggle dropbtn" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item one" href="#">Yes</a></li>
                            <li><a className="dropdown-item two" href="#">Probably Not</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App