import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skilled in web application penetration testing and full-stack development, with hands-on experience identifying and exploiting security vulnerabilities. Proficient in a wide range of programming languages and frameworks. Strong understanding of cybersecurity tools such as Nmap, Burp Suite, and others, used for reconnaissance, analysis, and exploitation. Passionate about building secure, scalable applications and continuously expanding knowledge in ethical hacking and secure coding practices.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5 className="sc">Web Pentesting</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5 className="sc" >Full Stack Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5 className="sc">Shell Scripting</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5 className="sc">C Language</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
