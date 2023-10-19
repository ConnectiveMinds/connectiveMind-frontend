export interface ISkillCard {
  name: string;
}
export function SkillCard(props: ISkillCard) {
  return (
    <div>
      <div className="max-w-fit max-h-fit bg-white rounded-lg ml-2 p-1">
        {props.name}
      </div>
    </div>
  );
}
