import React from "react";

export function Navbar(){
    return (
      <ul className="navbar">
        <li className="logo">
          <img
            className="logo"
            src="src\Data\Connective 1.png"
            alt="logo"
        
          />
        </li>
        <li><button className="SignIn">Sign In</button></li>
        <li><button className="SignUp">Sign Up</button></li>
      </ul>
    );
}