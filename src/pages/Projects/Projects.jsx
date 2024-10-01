import "./Projects.css";
import Header from "../../components/Header/Header.jsx";
// import ThumbNail from "../../components/ProjectThumbnail/ProjectThumbnail.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
// import placeHolderImg from "../../assets/placeHolderImg.jpg";

function Projects() {
  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <section className="hero-secondPage">
          <h1>My Projects</h1>
          </section>
        </div>
        <CallToAction></CallToAction>
        <Footer></Footer>
      </article>
    </main>
  );
}

export default Projects;
