import { useState, useEffect } from "react";
import {
  IProjectCard,
  ProjectCard,
} from "../../../Components/Cards/projects_card";
import { getAllProjects } from "../../../services/api.services";

export function RecommendedProjects() {
  const [allideaslist, setallgrouplist] = useState<Array<IProjectCard>>([]);
  useEffect(() => {
    getAllProjects().then((data) => {
      setallgrouplist(data["data"]);
    });
  }, []);

  const projectlist = allideaslist.map((project) => {
    return (
      <li className="mt-4">
        <ProjectCard
          ownerId={project.ownerId}
          _id={project._id}
          title={project.title}
          description={project.description}
          skills={project.skills}
        ></ProjectCard>
      </li>
    );
  });
  return (
    <div className="ml-8 mr-8">
      <h1 className=" h-[17px] pb-10 text-black text-[22px] font-bold font-['Inter']">
        Recommended Projects
      </h1>
      <ul>{projectlist}</ul>
    </div>
  );
}
