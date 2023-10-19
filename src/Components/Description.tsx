import React from "react";

export function Description() {
  return (
    <div className="description">
      <div className="intro" >
        <header>
          Meet<span>ConnectiveMinds</span>{" "}
        </header>
        <div className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          reprehenderit sit beatae ducimus, consectetur dignissimos nisi. Ipsum
          culpa delectus magni in quisquam quia ut sed vel blanditiis fugit!
          Temporibus, iure.
        </div>
      </div>
      <div className="images">
        <img className="bulb-bg" src="src\Data\Ellipse 1.png" alt="" />
        <img
          className="bulb"
          src="src\Data\Connective Minds (3) 1.png"
          alt=""
        />
      </div>
    </div>
  );
}
