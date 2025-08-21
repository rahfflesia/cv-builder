import "../../styles/work-experience.css";
import "../../styles/cv-component.css";

export default function ResumeWorkExperience({ workExperienceToRender }) {
  return (
    <div className="work-experience-wrapper">
      <div className="work-experience-header cv-header">
        <h1>WORK EXPERIENCE</h1>
      </div>
      {workExperienceToRender.map((workExperienceObject) => {
        return (
          <div className="work-experience-section">
            <div className="company">
              <div className="company-info">
                <div className="company-name bold">
                  {workExperienceObject.company}
                </div>
                |
                <div className="company-location semi-bold">
                  {workExperienceObject.location}
                </div>
              </div>
              <div className="dates">
                <div className="from semi-bold">
                  {workExperienceObject.startDate}
                </div>
                -
                <div className="to semi-bold">
                  {workExperienceObject.endDate}
                </div>
              </div>
            </div>
            <div className="position almost-bolder">
              {workExperienceObject.role}
            </div>
            <div className="job-description">
              <p>{workExperienceObject.roleDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
