import "./../../styles/input-component.css";
import { useState } from "react";
import Header from "./Header";

export default function General({ setGeneralInfo, onClick }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="input-component">
      <Header
        title={"General information"}
        visible={visible}
        // Update using a callback (updater function)
        toggle={() => setVisible((v) => !v)}
      ></Header>
      <div className={visible ? "input-section" : "hide"}>
        <div className="input-wrapper">
          <label htmlFor="">Picture</label>
          <input
            type="file"
            onChange={(e) => {
              setGeneralInfo((obj) => ({
                ...obj,
                picture: URL.createObjectURL(e.target.files[0]),
              }));
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Full name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setGeneralInfo((obj) => ({ ...obj, fullName: e.target.value }));
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setGeneralInfo((obj) => ({ ...obj, email: e.target.value }));
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone-number">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            onChange={(e) => {
              setGeneralInfo((obj) => ({
                ...obj,
                phoneNumber: e.target.value,
              }));
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            placeholder="Enter your location"
            onChange={(e) => {
              setGeneralInfo((obj) => ({ ...obj, location: e.target.value }));
            }}
          />
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
