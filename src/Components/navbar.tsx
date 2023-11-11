import React from "react";


export function Navbar(){
    return (
      <ul className="navbar">
        <li className="logo">
          <img className="logo" src="src\Data\Connective 1.png" alt="logo" />
        </li>
        <a href="/SignIn">
          <li>
            <button className="not-colored">Sign In</button>
          </li>
        </a>
        <a href="/SignUp">
          <li>
            <button className="colored">Sign Up</button>
          </li>
        </a>
      </ul>
    );
}
