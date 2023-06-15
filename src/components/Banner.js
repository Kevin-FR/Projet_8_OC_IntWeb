import "../styles/Banner.scss";

function Banner(props) {
  return (
    <div className="kasa-banner">
      <img alt="banner" src={props.background} />
      <div className="kasa-banner-text">{props.text}</div>
    </div>
  );
}

export default Banner;
