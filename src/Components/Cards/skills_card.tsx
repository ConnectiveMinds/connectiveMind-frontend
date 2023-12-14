export interface ISkillCard {
  name: string;
}
export function SkillCard(props: ISkillCard) {
  return (
    <div>
      <div className="max-w-fit max-h-fit bg-gray-200 rounded-lg ml-2 p-1">
        {props.name}
      </div>
    </div>
  );
}
