
import logo from '../images/Logo.png'

import {useState} from 'react';


import './navbar.css';
const Navbar=()=>{
const [show ,setShow]=useState(false)

return(
    <>   
    
  <nav className="p-1 mb-2 bg-white navbar navbar-expand-lg navbar-light bg-body nav_shadow">
  <div className="container-fluid">



  <button onClick={()=>{setShow(!show)}}   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <a className="mx-auto navbar-brand " href="#"> <img src={logo} class="img-fluid logo bg-light" alt="cxfj"></img></a>
    
    <div className={`  collapse navbar-collapse  ${show ? "show": " "} `}  >


      <ul className="mb-2 text-center navbar-nav mb-lg-0 text-dark ">

     

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Wedding Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Birthday Cards</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Feeling Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Anniversary Cards </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login | Signup</a>
        </li>


      </ul>
     
</div>

     
 
  </div>
</nav>



    
    
     </>
    
    
    
    
    
    
    )




}

export default Navbar;