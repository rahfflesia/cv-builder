import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";

export default function Skills({
  skillsArray,
  addClickHandler,
  submitClickHandler,
  onChange,
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="input-component">
      <Header
        title={"Skills"}
        toggle={() => {
          setVisible((v) => !v);
        }}
        visible={visible}
      ></Header>
      <div className={visible ? "input-section" : "hide"}>
        <div className="input-wrapper">
          <label htmlFor="">Skills</label>
          {skillsArray.map((_, index) => (
            <input
              type="text"
              placeholder="Enter your skill"
              onChange={(e) => {
                onChange(e.target.value, index);
              }}
            />
          ))}
        </div>
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
