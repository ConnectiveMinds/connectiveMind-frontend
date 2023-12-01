import {
  IProjectCard,
  ProjectCard,
} from "../../../Components/Cards/projects_card";
export interface IRecommendedProjects {
  projects: IProjectCard[];
}
export function RecommendedProjects(props: IRecommendedProjects) {
  const projectlist = props.projects.map((project) => {
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
