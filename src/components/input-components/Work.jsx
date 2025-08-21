import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";

export default function Work({
  workExperienceArray,
  addClickHandler,
  submitClickHandler,
  onChange,
}) {
  const [visible, setVisible] = useState(false);
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
        {workExperienceArray.map((_, index) => (
          <div className="work-experience-component">
            <span>
              <strong>Job {index + 1}</strong>
            </span>
            <div className="input-wrapper">
              <label htmlFor="">Company</label>
              <input
                type="text"
                placeholder="Enter the name of the company"
                onChange={(e) => {
                  onChange(e.target.value, index, "company");
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Location</label>
              <input
                type="text"
                placeholder="Enter the location of the company"
                onChange={(e) => {
                  onChange(e.target.value, index, "location");
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Role</label>
              <input
                type="text"
                placeholder="Enter your role title"
                onChange={(e) => {
                  onChange(e.target.value, index, "role");
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Role description</label>
              <textarea
                placeholder="Briefly describe the role"
                onChange={(e) => {
                  onChange(e.target.value, index, "roleDescription");
                }}
              ></textarea>
            </div>
            <div className="outer-date-wrapper">
              <div className="date-wrapper">
                <label htmlFor="">Start date</label>
                <input
                  type="date"
                  onChange={(e) => {
                    onChange(e.target.value, index, "startDate");
                  }}
                />
              </div>
              <div className="date-wrapper">
                <label htmlFor="">End date</label>
                <input
                  type="date"
                  onChange={(e) => {
                    onChange(e.target.value, index, "endDate");
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="button-wrapper">
          <button
            onClick={() => {
              addClickHandler();
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              submitClickHandler();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
