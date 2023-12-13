/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavBar } from "../../../Components/NavBar/navbar";
import { SideBar } from "../../../Components/NavBar/sidebar";
import { HorizontalDivider } from "../../../Components/Divider/horizontalDivider";
import { VerticalDivider } from "../../../Components/Divider/verticalDivider";

import Review from "../components/review";

import { Events } from "../components/eventssection";
import { ChangeEvent, useEffect, useState } from "react";

import { RecommendedProjects } from "../components/recommendsection";

import { ChatSection } from "../components/chatsection";
import TeamMembersPage from "../components/teamSection";

import { getIdeaByUserId } from "../../../services/api.services";
export interface IHomePage {
  title: string;
  _id: string;
}

export function HomePage() {
  const [mygrouplist, setmygroupList] = useState<Array<IHomePage>>([]);

  useEffect(() => {
    getIdeaByUserId().then((data) => {
      setmygroupList(data["data"]);
    });
  }, []);
  console.log(mygrouplist);
  const [currentSection, setcurrentsection] = useState(<RecommendedProjects />);
  const handledeitemClick = (section: string, id: string) => {
    switch (section) {
      case "Chat":
        setcurrentsection(<ChatSection projectId={id} />);
        break;
      case "Project Timeline":
        break;
      case "Team":
        setcurrentsection(<TeamMembersPage _id={id} />);
        break;
      case "Resources":
        //Resources section here
        break;
      default:
        setcurrentsection(<RecommendedProjects />);
        break;
    }
  };
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
        <SideBar
          groups={mygrouplist}
          onClick={(section, id) => {
            handledeitemClick(section, id);
          }}
        ></SideBar>
        <VerticalDivider />
        <div>{currentSection}</div>

        <Events></Events>
      </div>
      <Review />
    </div>
  );
}
