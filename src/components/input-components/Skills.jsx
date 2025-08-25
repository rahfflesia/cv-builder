import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";
import DeleteLogo from "../../../public/icons/delete.png";

export default function Skills({ setSkillsValues }) {
  const [visible, setVisible] = useState(false);
  const [skills, setSkills] = useState([]);

  function onSkillChange(value, index) {
    setSkills((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  }

  function onSkillDelete(index) {
    setSkills((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  }
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
          {skills.map((skillValue, index) => (
            <div className="input-inner-wrapper">
              <input
                type="text"
                placeholder="Enter your skill"
                onChange={(e) => {
                  onSkillChange(e.target.value, index);
                }}
                value={skillValue}
              />
              <div
                className="delete-logo"
                onClick={() => {
                  onSkillDelete(index);
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
              setSkills((array) => [...array, ""]);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setSkillsValues(skills);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
