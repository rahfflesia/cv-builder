import "../../styles/work-experience.css";

export default function ResumeEducation({ educationHistoryArray }) {
  return (
    <div className="education-wrapper">
      <div className="education-header cv-header">
        <h1>EDUCATION</h1>
      </div>
      {educationHistoryArray.map((educationHistoryObject) => {
        return (
          <div className="education-data">
            <div className="school">
              <div className="school-info">
                <div className="school-name bold">
                  {educationHistoryObject.schoolName}
                </div>
                |
                <div className="school-location semi-bold">
                  {educationHistoryObject.location}
                </div>
              </div>
              <div className="dates">
                <div className="from semi-bold">
                  {educationHistoryObject.startDate}
                </div>
                -
                <div className="to semi-bold">
                  {educationHistoryObject.endDate}
                </div>
              </div>
            </div>
            <div className="degree almost-bolder">
              {educationHistoryObject.degree}
            </div>
            <div className="degree-description">
              <p>{educationHistoryObject.degreeDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
