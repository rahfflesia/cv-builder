import "../../styles/cv-component.css";

export default function ResumeProfessionalSummary({ storedSummary }) {
  return (
    <div className="professional-summary">
      <div className="professional-summary-header cv-header">
        <h1>PROFESSIONAL SUMMARY</h1>
      </div>
      <p className="professional-summary-paragraph">{storedSummary}</p>
    </div>
  );
}
