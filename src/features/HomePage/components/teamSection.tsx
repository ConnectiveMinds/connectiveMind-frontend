/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { IMember } from "../Interface";
import {
  getIdeaByProjectId,
  removeMemberByUserId,
} from "../../../services/api.services";
import TeamMemberTile from "../../../Components/Cards/group_member_card";

const TeamMembersPage: React.FC<IMember> = ({ _id }) => {
  const [idea, setIdea] = useState<IMember>();

  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    getIdeaByProjectId(_id).then((data) => {
      setIdea(data.data);
    });
    setCurrentUser(JSON.parse(localStorage.getItem("user")!).data.userId);
  }, [idea]);
  const handleRemoveClick = (memberId: string) => {
    return removeMemberByUserId(_id, memberId).then((data) => {
      setIdea(data.data);
    });
  };
  return (
    <div className="container mx-20 mt-8 md:mx-10">
      <h1 className="text-3xl font-semibold mb-4 md:mx-10 mx-4">
        Team Members
      </h1>
      {idea?.members?.map((member) => {
        return (
          <TeamMemberTile
            id={member._id}
            memberName={member.name}
            ownerId={idea.ownerId!}
            loggedInUserId={currentUser}
            groupId={_id}
            onRemove={() => handleRemoveClick(member._id)}
          />
        );
      })}
    </div>
  );
};

export default TeamMembersPage;
