import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";
import CustomInfo from "../../classes/customInfo";

export default function CustomInformation({ setUpdatedCustomInfo }) {
  const [visible, setVisible] = useState(false);
  const [customInfo, setCustomInfo] = useState(new CustomInfo());
  return (
    <div className="input-component">
      <Header
        title={"Custom information"}
        visible={visible}
        toggle={() => {
          setVisible((v) => !v);
        }}
      ></Header>
      <div className={visible ? "input-section" : "hide"}>
        <div className="input-wrapper">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Enter the title of the custom section"
            onChange={(e) => {
              setCustomInfo((obj) => ({ ...obj, title: e.target.value }));
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Description</label>
          <textarea
            placeholder="Add a brief description"
            onChange={(e) => {
              setCustomInfo((obj) => ({ ...obj, description: e.target.value }));
            }}
          ></textarea>
        </div>
        <div className="button-wrapper">
          <button
            onClick={() => {
              setUpdatedCustomInfo(customInfo);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
