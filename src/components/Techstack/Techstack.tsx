import React from "react";
import '../../styles/_techstack.scss'

const Techstack = () => {
    return ( 

      <section className="techstack" id="teckstack" >
          <hr />
          <h2 className="techstack__title" tabIndex={0}>Tech Stack</h2>
          <hr />
          
          <ul className="techstack__list">

            <li className="icons" aria-label="html"> 
              <i className="fab fa-html5" aria-hidden="true"> </i> 
            </li>

            <li className="icons" aria-label="css3">
              <i className="fa fa-css3" aria-hidden="true"></i>
            </li>
            
            <li className="icons" aria-label="javascript"> 
              <i className="fab fa-js" aria-hidden="true"> </i> 
            </li>
            
            <li className="icons" aria-label="react">
              <i className="fab fa-react" aria-hidden="true"></i> 
            </li>

            <li className="icons" aria-label="sass">
              <i className="fab fa-sass" aria-hidden="true"> </i>
            </li>

            <li className="icons" aria-label="python">
              <i className="fab fa-python" aria-hidden="true"> </i>
            </li>

          </ul>
        
      </section>
     );
}
 
export default Techstack;