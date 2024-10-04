import "./ProjectDetail.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import PlaceHolderImg from "../../assets/placeHolderImg.jpg"
import Tag from "../../components/Tag/Tag.jsx";
import Button from "../../components/Button/Button.jsx";

function ProjectDetail() {
  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <section className="hero-secondPage">
            <h1>Project Name</h1>
            <div className="sub-container">
              <Tag name="React"></Tag>
              <Button variant="white" type="button" hasArrow={true}>
                External Link
              </Button>
            </div>
          </section>
          <section>
            <div className="content-wrapper">
              <div className="img-wrapper">
                <img src={PlaceHolderImg}  alt=""/>
              </div>
              
            </div>
          </section>
        </div>
        <CallToAction />
        <Footer></Footer>
      </article>
    </main>
  );
}

export default ProjectDetail;
