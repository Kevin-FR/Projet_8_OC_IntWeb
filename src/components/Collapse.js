import { useState } from "react";
import "../styles/Collapse.scss";

function transformPanel() {
  //max-height: ${(props) => (props.collapsed ? 0 : "400px")};
  //props.collapsed ? "rotate(0deg)" : "rotate(180deg)"};
}

function Collapse(props) {
  const [panel, setPanel] = useState(0);
  const changeHandler = () => {
    setPanel(() => !panel);
  };
  return (
    <div key={props.id} className="kasa-collapse">
      <div className="kasa-collapse-header" onClick={changeHandler}>
        <span>{props.title}</span>
        <div className={
            panel
              ? "kasa-collapse-svg"
              : "kasa-collapse-svg kasa-collapse-svg-180"
          }
           collapsed={+panel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
      </div>
      <div className="kasa-collapse-content" collapsed={+panel}>
        <div
          className={
            panel
              ? "kasa-collapse-content-inner"
              : "kasa-collapse-content-inner kasa-collapse-content-inner-hide"
          }
        >
          {props.content}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
