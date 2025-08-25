import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";
import WorkExperience from "../../classes/workExperience";

export default function Work({ setUpdatedWorkExperience }) {
  const [visible, setVisible] = useState(false);
  const [workExperience, setWorkExperience] = useState([]);

  function onWorkExperienceChange(value, index, property) {
    setWorkExperience((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [property]: value };
      return copy;
    });
  }

  function onWorkExperienceDelete(index) {
    setWorkExperience((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  }
  return (
    <div className="input-component">
      <Header
        title={"Work experience"}
        visible={visible}
        toggle={() => {
          setVisible((v) => !v);
        }}
      ></Header>
      <div className={visible ? "input-section" : "hide"}>
        <label htmlFor="">Work experience</label>
        {workExperience.map((workExperienceObject, index) => (
          <div className="work-experience-component">
            <span>
              <strong>Job {index + 1}</strong>
            </span>
            <div className="input-wrapper">
              <label htmlFor="" className="title">
                Company{" "}
                <span
                  onClick={() => {
                    onWorkExperienceDelete(index);
                  }}
                >
                  <strong>Delete</strong>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter the name of the company"
                onChange={(e) => {
                  onWorkExperienceChange(e.target.value, index, "company");
                }}
                value={workExperienceObject.company}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Location</label>
              <input
                type="text"
                placeholder="Enter the location of the company"
                onChange={(e) => {
                  onWorkExperienceChange(e.target.value, index, "location");
                }}
                value={workExperienceObject.location}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Role</label>
              <input
                type="text"
                placeholder="Enter your role title"
                onChange={(e) => {
                  onWorkExperienceChange(e.target.value, index, "role");
                }}
                value={workExperienceObject.role}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Role description</label>
              <textarea
                placeholder="Briefly describe the role"
                onChange={(e) => {
                  onWorkExperienceChange(
                    e.target.value,
                    index,
                    "roleDescription"
                  );
                }}
                value={workExperienceObject.roleDescription}
              ></textarea>
            </div>
            <div className="outer-date-wrapper">
              <div className="date-wrapper">
                <label htmlFor="">Start date</label>
                <input
                  type="date"
                  onChange={(e) => {
                    onWorkExperienceChange(e.target.value, index, "startDate");
                  }}
                  value={workExperienceObject.startDate}
                />
              </div>
              <div className="date-wrapper">
                <label htmlFor="">End date</label>
                <input
                  type="date"
                  onChange={(e) => {
                    onWorkExperienceChange(e.target.value, index, "endDate");
                  }}
                  value={workExperienceObject.endDate}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="button-wrapper">
          <button
            onClick={() => {
              setWorkExperience((array) => [...array, new WorkExperience()]);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setUpdatedWorkExperience(workExperience);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
