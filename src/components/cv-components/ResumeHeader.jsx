import "../../styles/input-component.css";
import EmailIcon from "../../../public/icons/email.png";
import PhoneIcon from "../../../public/icons/phone-call.png";
import LocationIcon from "../../../public/icons/pin.png";

export default function ResumeHeader({ generalDataObject }) {
  return (
    <div className="general-info-cv">
      <div
        className={
          generalDataObject.picture.length < 1 ? "hide" : "img-wrapper"
        }
      >
        <img src={generalDataObject.picture} alt="profile-picture" />
      </div>
      <div className="personal-data">
        <h1 className="name">{generalDataObject.fullName}</h1>
        <div className="data">
          <div className="email">
            <img
              src={EmailIcon}
              alt="email-icon"
              width={"25px"}
              height={"25px"}
            />
            {generalDataObject.email}
          </div>
          <div className="phone-number">
            <img
              src={PhoneIcon}
              alt="phone-icon"
              width={"25px"}
              height={"25px"}
            />
            {generalDataObject.phoneNumber}
          </div>
          <div className="location">
            <img
              src={LocationIcon}
              alt="location-icon"
              width={"25px"}
              height={"25px"}
            />
            {generalDataObject.location}
          </div>
        </div>
      </div>
    </div>
  );
}
