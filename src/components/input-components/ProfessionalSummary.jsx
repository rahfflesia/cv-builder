import { useState } from "react";
import "../../styles/input-component.css";
import Header from "./Header";

export default function ProfessionalSummary({ setLatestSummary }) {
  const [visible, setVisible] = useState(false);
  const [summary, setSummary] = useState("");
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
              setLatestSummary(summary);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
