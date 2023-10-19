import React from "react";
import Projects from "../Data/projects.json";
import { Navbar } from "../Components/navbar";
import { Description } from "../Components/Description";
import { Explore } from "../Components/Explore";

export function LandingPage() {
  return (
    <div className="body">
      <Navbar />
      <Description />
      <Explore
        topic="ABCD"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi temporibus corporis deserunt illo autem asperiores doloribus cupiditate nulla sunt exercitationem. Sapiente itaqu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi temporibus corporis deserunt illo autem asperiores doloribus cupiditate nulla sunt exercitationem. Sapiente itaqu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi temporibus corporis deserunt illo autem asperiores doloribus cupiditate nulla sunt exercitationem. Sapiente itaqu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi temporibus corporis deserunt illo autem asperiores doloribus cupiditate nulla sunt exercitationem. Sapiente itaqu"
      />
    </div>
  );
}

<h1>xe laborum ex explicabo quod aperiam eaque fugiat vel.</h1>;
