import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";

export default function ProfessionalSummary({ onClick, setSummary }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="input-component">
      <Header
        title={"Professional summary"}
        visible={visible}
        toggle={() => {
          setVisible((v) => !v);
        }}
      ></Header>
      <div className={visible ? "input-section" : "hide"}>
        <div className="input-wrapper">
          <label htmlFor="professional-summary">Professional summary</label>
          <textarea
            placeholder="Add a brief description"
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
        </div>
        <div className="button-wrapper">
          <button
            onClick={() => {
              onClick();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
