import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";

export default function Education({
  educationHistoryArray,
  onChange,
  addClickHandler,
  submitClickHandler,
}) {
  const [visible, setVisible] = useState(false);
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
        {educationHistoryArray.map((_, index) => (
          <div className="education-component">
            <label htmlFor="">
              <strong>School History {index + 1}</strong>
            </label>
            <div className="input-wrapper">
              <label htmlFor="">School</label>
              <input
                type="text"
                placeholder="Enter your school name"
                onChange={(e) => {
                  onChange(e.target.value, index, "schoolName");
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">School location</label>
              <input
                type="text"
                placeholder="Enter the location of the school"
                onChange={(e) => {
                  onChange(e.target.value, index, "location");
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Degree</label>
              <input
                type="text"
                placeholder="Enter the name of your degree"
                onChange={(e) => {
                  onChange(e.target.value, index, "degree");
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Degree description</label>
              <textarea
                placeholder="Describe your degree"
                onChange={(e) => {
                  onChange(e.target.value, index, "degreeDescription");
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
