/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavBar } from "../../../Components/NavBar/navbar";
import { SideBar } from "../../../Components/NavBar/sidebar";
import { HorizontalDivider } from "../../../Components/Divider/horizontalDivider";
import { VerticalDivider } from "../../../Components/Divider/verticalDivider";

import { Events } from "../components/eventssection";
import { ChangeEvent, useEffect, useState } from "react";

// import { RecommendedProjects } from "../components/recommendsection";
import { ChatSection } from "../components/chatsection";
import { getIdeaByUserId } from "../../../services/homepageServices";
export interface IHomePage {
  title: string;
  _id: string;
}

export function HomePage() {
  const [grouplist, setgroupList] = useState<Array<IHomePage>>([]);

  useEffect(() => {
    getIdeaByUserId().then((data) => {
      console.log(data["data"]._id);
      setgroupList(data["data"]);
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
        <SideBar groups={grouplist}></SideBar>
        <VerticalDivider />
        <ChatSection />
        {/* 
        <RecommendedProjects
          projects={[
            {
              name: "Upaaya",
              description:
                "A very good application where prabesh is carpenter but in real does plumbing A very good application where prabesh is carpenter but in real does plumbing A very good application where prabesh is carpenter but in real does plumbing A very good application where prabesh is carpenter but in real does plumbing  ",
              skills: [
                {
                  name: "Flutter",
                },
                {
                  name: "NodeJs",
                },
                {
                  name: "Js",
                },
              ],
            },

            {
              name: "Kinmell",
              description:
                "A very good application where prabesh is pros but in real does  A very good application where prabesh is carpenter but in real does plumbing A very good application where prabesh is carpenter but in real does plumbing A very good application where prabesh is carpenter but in real does plumbing  ",
              skills: [
                {
                  name: "Flutter",
                },
                {
                  name: "NodeJs",
                },
                {
                  name: "Js",
                },
              ],
            },
          ]}
        /> */}
        <Events></Events>
      </div>
    </div>
  );
}
