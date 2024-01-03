import { useState, useEffect } from "react";
import { ProjectCard } from "../../../Components/Cards/projects_card";
import { fetchallproject, getIdeaStatus, selectIdea } from "../ideaSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hook";
import { IProject } from "../Interface";

export function RecommendedProjects() {
  const dispatch = useAppDispatch();
  const [allideaslist, setallgrouplist] = useState<Array<IProject>>([]);
  const currentdata = useSelector(selectIdea);
  const ideaStatus = useSelector(getIdeaStatus);
  useEffect(() => {
    if (ideaStatus === "idle") {
      dispatch(fetchallproject());
    } else if (ideaStatus == "loading") {
      console.log("Error");
    } else if (ideaStatus == "allgroupfetched") {
      setallgrouplist(currentdata);
    } else if (ideaStatus == "failed") {
      console.log("Error");
    }
  }, [dispatch, currentdata]);

  const projectlist = allideaslist.map((project) => {
    return (
      <li className="mt-4">
        <ProjectCard
          key={project._id}
          ownerId={project.ownerId!}
          _id={project._id}
          title={project.title!}
          description={project.description!}
          skills={project.skills!}
        ></ProjectCard>
      </li>
    );
  });
  return (
    <div className="ml-8 mr-8 overflow-y-auto max-h-screen max-w-full">
      <h1 className=" h-[17px] pb-10 text-black text-[22px] font-bold font-['Inter'] ">
        Recommended Projects
      </h1>
      <ul>{projectlist}</ul>
    </div>
  );
}
