import React from "react";

import "../../styles/_button.scss";



type ButtonComponentPropsType ={
    type: "button" | "submit";
    text: string;
}

 
const  ButtonComponent = ({type ="button", text}: ButtonComponentPropsType) => {
    return ( 
        <button  className="btn" type={type}> {text}
        </button> 
     );
}
 
export default ButtonComponent;

