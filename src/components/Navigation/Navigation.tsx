
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link"


import "../../styles/_navbar.scss"; 


const Navigation = () => {
    return ( 
    
        <header >
            <nav className="nav">
                <HashLink className="nav__link" to="/">
                <p>𝔾𝔸ℕ𝔾𝔸</p>  </HashLink>
    
               
                 <input className="nav__check" type="checkbox" id="check" />
                <label className="nav__toggle" aria-label="hamburger-menu" htmlFor="check">
                <GiHamburgerMenu aria-hidden="true" />
                </label>  
                
           
            <ul className="nav__ul" >
                <li  className="nav__li">
                  {/* <a className="nav__link" href="#home"> Home  </a> */}
                  <HashLink className="nav__link" to="#home" smooth>Home</HashLink>
                </li>

                <li className="nav__li"> 
                   <HashLink className="nav__link" to="#project" smooth>Projects</HashLink>
                </li>

                <li className="nav__li"> 
                    <HashLink className="nav__link" to="#teckstack" smooth>
                   TechStack </HashLink>
                </li>

                <li className="nav__li"> 
                    <HashLink className="nav__link" to="#blogs" smooth >
                   Blogs </HashLink>
                    
                </li>

                <li className="nav__li"> 
                    <HashLink className="nav__link" to="#contact" smooth>
                   Contact </HashLink>
                </li>
                
            </ul>
        
        </nav>
        <hr />
    </header>
      
     );

}
 
export default Navigation;