import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";
import EducationHistory from "../../classes/educationHistory";

export default function Education({ setUpdatedEducationHistory }) {
  const [visible, setVisible] = useState(false);
  const [educationHistory, setEducationHistory] = useState([]);

  function onEducationHistoryChange(value, index, property) {
    setEducationHistory((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [property]: value };
      return copy;
    });
  }

  function onEducationHistoryDelete(index) {
    setEducationHistory((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  }
  return (
    <div className="input-component">
      <Header
        title={"Education"}
        visible={visible}
        toggle={() => {
          setVisible((v) => !v);
        }}
      ></Header>
      <div className={visible ? "input-section" : "hide"}>
        {educationHistory.map((educationHistoryObject, index) => (
          <div className="education-component">
            <span>
              <strong>School History {index + 1}</strong>
            </span>
            <div className="input-wrapper">
              <label htmlFor="" className="title">
                School{" "}
                <span
                  onClick={() => {
                    onEducationHistoryDelete(index);
                  }}
                >
                  <strong>Delete</strong>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your school name"
                onChange={(e) => {
                  onEducationHistoryChange(e.target.value, index, "schoolName");
                }}
                value={educationHistoryObject.schoolName}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">School location</label>
              <input
                type="text"
                placeholder="Enter the location of the school"
                onChange={(e) => {
                  onEducationHistoryChange(e.target.value, index, "location");
                }}
                value={educationHistoryObject.location}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Degree</label>
              <input
                type="text"
                placeholder="Enter the name of your degree"
                onChange={(e) => {
                  onEducationHistoryChange(e.target.value, index, "degree");
                }}
                value={educationHistoryObject.degree}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Degree description</label>
              <textarea
                placeholder="Describe your degree"
                onChange={(e) => {
                  onEducationHistoryChange(
                    e.target.value,
                    index,
                    "degreeDescription"
                  );
                }}
                value={educationHistoryObject.degreeDescription}
              ></textarea>
            </div>
            <div className="outer-date-wrapper">
              <div className="date-wrapper">
                <label htmlFor="">Start date</label>
                <input
                  type="date"
                  onChange={(e) => {
                    onEducationHistoryChange(
                      e.target.value,
                      index,
                      "startDate"
                    );
                  }}
                  value={educationHistoryObject.startDate}
                />
              </div>
              <div className="date-wrapper">
                <label htmlFor="">End date</label>
                <input
                  type="date"
                  onChange={(e) => {
                    onEducationHistoryChange(e.target.value, index, "endDate");
                  }}
                  value={educationHistoryObject.endDate}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="button-wrapper">
          <button
            onClick={() => {
              setEducationHistory((array) => [
                ...array,
                new EducationHistory(),
              ]);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setUpdatedEducationHistory(educationHistory);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
