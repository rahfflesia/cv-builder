import "../../styles/cv-component.css";

export default function ResumeCustomInformation({ updatedCustomInfo }) {
  return (
    <div className="custom-information">
      <div className="custom-information-header cv-header">
        <h1>
          {updatedCustomInfo.title.length < 1
            ? "CUSTOM INFORMATION"
            : updatedCustomInfo.title}
        </h1>
      </div>
      <p className="custom-information-paragraph">
        {updatedCustomInfo.description.length < 1
          ? "The description goes here."
          : updatedCustomInfo.description}
      </p>
    </div>
  );
}
