import React from "react";


export function Navbar(){
    return (
      <ul className="text-center overflow-hidden items-center box-border sticky">
        <li className="nav-elements">
          <img
            className="float-left m-5 p-0 h-24"
            src="src\Data\Connective 1.png"
            alt="logo"
          />
        </li>
        <a href="/SignIn">
          <li className="nav-elements">
            <button className="not-colored">Sign In</button>
          </li>
        </a>
        <a href="/SignUp">
          <li className="nav-elements">
            <button className="colored">Sign Up</button>
          </li>
        </a>
      </ul>
    );
}
