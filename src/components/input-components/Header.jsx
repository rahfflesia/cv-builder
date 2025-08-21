import "../../styles/input-component.css";
import arrow from "../../../public/icons/down.png";

export default function Header({ title, toggle, visible }) {
  return (
    <div className="header">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="arrow" onClick={toggle}>
        <img
          src={arrow}
          alt="arrow-icon"
          width={"18px"}
          height={"18px"}
          className={visible ? "rotate" : ""}
        />
      </div>
    </div>
  );
}
