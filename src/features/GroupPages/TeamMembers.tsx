import React, { useState } from "react";
import TeamMemberTile from "../../Components/Cards/group_member_card";


interface TeamMembersPage {
    groupID: string; 
    ownerID:string;
  }
const TeamMembersPage: React.FC<TeamMembersPage> = ({groupID, ownerID}) => {
    
  const [fakeTeamMembers, setTeamMembers] = useState([
    { id: "1", name: "John Doe"},
    { id: "2", name: "Jane Smith"},
    { id: "3", name: "Bob Johnson"},
  ]);

 
  const loggedInUserId = "1";


  const handleRemoveClick = (memberId: string) => {
    const updatedMembers = fakeTeamMembers.filter((member) => member.id !== memberId);
    setTeamMembers(updatedMembers);
    console.log(`Remove button clicked for member with ID ${memberId}`);
  };
  return (
    <div className="container mx-20 mt-8 md:mx-10">
      <h1 className="text-3xl font-semibold mb-4 md:mx-10 mx-4">Team Members</h1>
      {fakeTeamMembers.map((member) => (
        <TeamMemberTile
          id={member.id}
          key={member.id}
          memberName={member.name}
          ownerId={ownerID}
          loggedInUserId={loggedInUserId}
          groupId={groupID}
          onRemove={() => handleRemoveClick(member.id)}
        />
      ))}
    </div>
  );
};

export default TeamMembersPage;
