import "./CallToAction.css";
import Button from "../../components/Button/Button.jsx";

function CallToAction() {
  return (
    <div className="cta-wrapper">
      <div className="cta-content">
        <h2 className="large-size">Let&apos;s have a talk</h2>
        <div className="divider divider-white"></div>
        <div className="btn-wrapper">
          <div className="btn-pair">
            <Button variant="outline-white">jasin.tairaidrissi@gmail.com</Button>
            <Button variant="outline-white">+31 (0)6 46 237 292</Button>
          </div>
          <Button
          variant="white-orange"
          hasArrow={true}
          href="/Contact" 
          >Get in Touch</Button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
