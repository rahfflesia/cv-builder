import "../../styles/cv-component.css";

export default function ResumeSkills({ skillsToRender }) {
  return (
    <div className="skills-wrapper">
      <div className="cv-skills cv-header">
        <h1>SKILLS</h1>
      </div>
      <div className="skills-area">
        <ul>
          {skillsToRender.map((skillValue) => {
            return <li key={crypto.randomUUID}>{skillValue}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
