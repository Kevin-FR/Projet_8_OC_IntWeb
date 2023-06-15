import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Collapse.scss";

const ToggleButtonWrapper = styled.div`
  transform: ${(props) =>
    props.collapsed ? "rotate(0deg)" : "rotate(180deg)"};
`;

const PanelContent = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.collapsed ? 0 : "400px")};
`;

const PanelContentInner = styled.div`
  padding: 50px 20px 20px 20px;
`;

function Collapse(props) {
  console.log(props.id);
  const [allPanels, setAllPanels] = useState(true);

  const changeHandler = (selectPanel) => {
    setAllPanels((selectPanel) => !allPanels);
  };

  return (
    <div key={props.id} className="kasa-collapse">
      <div className="kasa-collapse-header" onClick={changeHandler}>
        <span>{props.title}</span>
        <ToggleButtonWrapper collapsed={+allPanels}>
          <FontAwesomeIcon className="kasa-star-disable" icon={faChevronDown} />
        </ToggleButtonWrapper>
      </div>
      <PanelContent className="kasa-collapse-content" collapsed={+allPanels}>
        <PanelContentInner>{props.content}</PanelContentInner>
      </PanelContent>
    </div>
  );
}

export default Collapse;
