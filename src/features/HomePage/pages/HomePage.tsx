/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavBar } from "../../../Components/NavBar/navbar";
import { SideBar } from "../../../Components/NavBar/sidebar";
import { HorizontalDivider } from "../../../Components/Divider/horizontalDivider";
import { VerticalDivider } from "../../../Components/Divider/verticalDivider";

import { Events } from "../components/eventssection";
import { ChangeEvent, useEffect, useState } from "react";
import {
  getAllProjects,
  getIdeaByUserId,
} from "../../../services/homepageServices";
import { RecommendedProjects } from "../components/recommendsection";
import { IProjectCard } from "../../../Components/Cards/projects_card";
export interface IHomePage {
  title: string;
  _id: string;
}

export function HomePage() {
  const [mygrouplist, setmygroupList] = useState<Array<IHomePage>>([]);
  const [allideaslist, setallgrouplist] = useState<Array<IProjectCard>>([]);
  useEffect(() => {
    getIdeaByUserId().then((data) => {
      setmygroupList(data["data"]);
    });
    getAllProjects().then((data) => {
      setallgrouplist(data["data"]);
    });
  }, []);

  return (
    <div>
      <NavBar
        isHomePage={true}
        isLandingpage={false}
        name={""}
        error={false}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      ></NavBar>
      <HorizontalDivider />
      <div className="flex flex-row">
        <SideBar groups={mygrouplist}></SideBar>
        <VerticalDivider />
        {/* <ChatSection /> */}

        <RecommendedProjects projects={allideaslist} />
        <Events></Events>
      </div>
    </div>
  );
}
