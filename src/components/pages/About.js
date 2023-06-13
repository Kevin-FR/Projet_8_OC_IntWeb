import "../../styles/About.scss";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";



const ToggleButtonWrapper = styled.div`
  transform: ${(props) =>
    props.collapsed ? "rotate(0deg)" : "rotate(180deg)"};
`;

const PanelContent = styled.div`
  overflow: hidden;
  height: ${(props) => (props.collapsed ? 0 : "100px")};
  transition: height 500ms;
`;

const PanelContentInner = styled.div`
  padding: 20px;
`;

function About() {
    

  const [allPanels, setAllPanels] = useState({
    panelFiabilite: true,
    panelRespect: true,
    panelService: true,
    panelSecurite: true
 });

  const changeHandler = selectPanel => {
    setAllPanels({...allPanels, [selectPanel]: !allPanels[selectPanel]})
 }

  return (
    <div className="kasa-about">
      <Header background="montain" />
      
      <div key="panelFiabilite" className="kasa-about-panel">
        <div  className="kasa-about-panel-header" name="test" onClick={() => changeHandler("panelFiabilite")}>
          <span>Fiabilité</span>
          <ToggleButtonWrapper collapsed={+allPanels.panelFiabilite}>
            <FontAwesomeIcon
              className="kasa-about-star-disable"
              icon={faChevronDown}
            />
          </ToggleButtonWrapper>
        </div>
        <PanelContent
          className="kasa-about-panel-content"
          collapsed={+allPanels.panelFiabilite}
        >
          <PanelContentInner>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photoq sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</PanelContentInner>
        </PanelContent>
      </div>
      <div key="panelRespect" className="kasa-about-panel">
        <div  className="kasa-about-panel-header" onClick={() => changeHandler("panelRespect")}>
          <span>Respect</span>
          <ToggleButtonWrapper collapsed={+allPanels.panelRespect}>
            <FontAwesomeIcon
              className="kasa-about-star-disable"
              icon={faChevronDown}
            />
          </ToggleButtonWrapper>
        </div>
        <PanelContent
          className="kasa-about-panel-content"
          collapsed={+allPanels.panelRespect}
        >
          <PanelContentInner>La bienveillance fait partie des valeurs fondatrices de Kasa, Tout comportement discriminatoire ou de perturbation du voisinage</PanelContentInner>
        </PanelContent>
      </div>
      <div key="panelService" className="kasa-about-panel">
        <div className="kasa-about-panel-header" onClick={() => changeHandler("panelService")}>
          <span>Service</span>
          <ToggleButtonWrapper collapsed={+allPanels.panelService}>
            <FontAwesomeIcon
              className="kasa-about-star-disable"
              icon={faChevronDown}
            />
          </ToggleButtonWrapper>
        </div>
        <PanelContent
          className="kasa-about-panel-content"
          collapsed={+allPanels.panelService}
        >
          <PanelContentInner>La bienveillance fait partie des valeurs fondatrices de Kasa, Tout comportement discriminatoire ou de perturbation du voisinage</PanelContentInner>
        </PanelContent>
      </div>
      <div key="panelSecurite" className="kasa-about-panel">
        <div className="kasa-about-panel-header" onClick={() => changeHandler("panelSecurite")}>
          <span>Sécurité</span>
          <ToggleButtonWrapper collapsed={+allPanels.panelSecurite}>
            <FontAwesomeIcon
              className="kasa-about-star-disable"
              icon={faChevronDown}
            />
          </ToggleButtonWrapper>
        </div>
        <PanelContent
          className="kasa-about-panel-content"
          collapsed={+allPanels.panelSecurite}
        >
          <PanelContentInner>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correcpond aux critères de décurité établis par nos services. En laissant une note aussi bien à l'hôte qu'an locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</PanelContentInner>
        </PanelContent>
      </div>
    </div>
  );
}

export default About;
