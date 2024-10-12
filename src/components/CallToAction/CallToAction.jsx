import "./CallToAction.css";
import Button from "../../components/Button/Button.jsx";
import { useState, useEffect } from "react";

function CallToAction() {
  const email = "jasin.tairaidrissi@gmail.com";
  const phone = "+31646327292";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(()=>{
    const handleResize = () =>{
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener('resize', handleResize);

    return ()=>{
      window.removeEventListener('resize',handleResize);
    }

  },[]);
  return (
    <div className="cta-wrapper">
      <div className="cta-content">
        <h2 className="large-size">Let&apos;s have a talk</h2>
        <div className="divider divider-white"></div>
        <div className="btn-wrapper">
          <div className="btn-pair">
            <Button variant="outline-white" href={`mailto:${email}`}>
              {isMobile ? "Email me" : "jasin.tairaidrissi@gmail.com"}
            </Button>
            <Button variant="outline-white" href={`tel:${phone}`}>
              {isMobile ? "Call me" : "+31 (0)6 46 237 292"}
              </Button>
          </div>
          <div className="btn-pair">
            <Button variant="white-orange" hasArrow={true} href="/Contact">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
