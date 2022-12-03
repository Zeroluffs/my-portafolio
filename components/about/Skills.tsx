const mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NextJS",
  "Cypress",
  "Git",
  "NodeJS",
  "Express",
  "MongoDB",
  "AWS",
];

interface SkillListType {
  skillName: string;
}
export function Skills() {
  return (
    <div className="mt-8 desktop:ml-8">
      <p className="font-sans text-2xl text-lightState ">My skills</p>
      <div className="flex flex-row justify-center gap-6  laptop:w-[450px] flex-wrap mt-4">
        {mySkills.map((skill, index) => {
          return (
            <div key={index}>
              <SkillsList skillName={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SkillsList({ skillName }: SkillListType) {
  return (
    <div className="bg-lightNavy ">
      <p className="px-2 py-2 font-sans text-lg text-lightState">{skillName}</p>
    </div>
  );
}
