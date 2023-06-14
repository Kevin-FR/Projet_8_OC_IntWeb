import "../styles/About.scss";
import Banner from "../components/Banner";
import image from  '../assets/images/montain.png';
import Collapse from "../components/Collapse";
import Content from '../datas/about.json';



function About() {
  return (
    <div className="kasa-about">
      <Banner background={image} />
      {Content.map(({id, title, content}) =>(
                    <div key={id} className="kasa-about-collapse">
                      <Collapse id={id} title={title} content={content} />
                    </div>
                ))}

    </div>
  );
}

export default About;
