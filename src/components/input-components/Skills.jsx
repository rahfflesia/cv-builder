import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";
import DeleteLogo from "../../../public/icons/delete.png";

export default function Skills({
  skillsArray,
  addClickHandler,
  submitClickHandler,
  onChange,
  onDelete,
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
          {skillsArray.map((skillValue, index) => (
            <div className="input-inner-wrapper">
              <input
                type="text"
                placeholder="Enter your skill"
                onChange={(e) => {
                  onChange(e.target.value, index);
                }}
                value={skillValue}
              />
              <div
                className="delete-logo"
                onClick={() => {
                  onDelete(index);
                }}
              >
                <img
                  src={DeleteLogo}
                  alt="delete-logo"
                  width={"25px"}
                  height={"25px"}
                />
              </div>
            </div>
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
