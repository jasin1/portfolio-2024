import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import projectsData from "../../data/projects.json";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
// import PlaceHolderImg from "../../assets/placeHolderImg.jpg";
import Tag from "../../components/Tag/Tag.jsx";
import Button from "../../components/Button/Button.jsx";
import {getImagePath} from "../../helpers/imageHelpers.js";
import TextBlock from "../../components/TextBlock/TextBlock.jsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.jsx";
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock.jsx";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Project not found!</div>;
  }

  const componentMap = {
    text: TextBlock,
    quote: QuoteBlock,
    images: ImageBlock,
  };

  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <section className="hero-secondPage">
            <h1>{project.title}</h1>
            <div className="sub-container">
              <div className="tag-wrapper">
                {project.tags.map((tag, index) => (
                  <Tag key={index} name={tag}></Tag>
                ))}
              </div>
              <Button
                variant="white"
                type="button"
                hasArrow={true}
                href={project.githubURL}
              >
                GitHub repo
              </Button>
            </div>
          </section>
          <section>
          <div className="img-wrapper">
                <img src={getImagePath(project.thumbnail)} alt="" />
              </div>
            <div className="content-wrapper">
              {project.contentBlock.map((block, index) => {
                const BlockComponent = componentMap[block.type];
                return (
                  <div key={index} className="content-block">
                    {BlockComponent && (
                      <BlockComponent content={block.content} />
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* <section>
            <div className="content-wrapper">
              <div className="img-wrapper">
                <img src={getImagePath(project.thumbnail)} alt="" />
              </div>
              <div className="content-block">
                <p className="quote-large">
                  Showcasing Cyberhavens AI data protection with a digital event
                  campaign and magical product experience.
                </p>
              </div>
              <div className="section-content">
                <div className="empty-block"></div>
                <p>
                  Mi a pellentesque proin laoreet risus vulputate quam erat in.
                  Eget orci ullamcorper ut nunc a eget lacus cum. Ac vivamus
                  viverra aliquam duis eu lectus dapibus pulvinar vitae.
                  Pellentesque auctor odio quis venenatis feugiat blandit
                  tortor. Integer purus amet elit odio pharetra commodo. Magnis
                  pharetra odio volutpat.
                  <br />
                  Mi a pellentesque proin laoreet risus vulputate quam erat in.
                  Eget orci ullamcorper ut nunc a eget lacus cum. Ac vivamus
                  viverra aliquam duis eu lectus dapibus pulvinar vitae.
                  Pellentesque auctor odio quis venenatis feugiat blandit
                  tortor. Integer purus amet elit odio pharetra commodo. Magnis
                  pharetra odio volutpat. <br />
                  Mi a pellentesque proin laoreet risus vulputate quam erat in.
                  Eget orci ullamcorper ut nunc a eget lacus cum. Ac vivamus
                  viverra aliquam duis eu lectus dapibus pulvinar vitae.
                  Pellentesque auctor odio quis venenatis feugiat blandit
                  tortor. Integer purus amet elit odio pharetra commodo. Magnis
                  pharetra odio volutpat.
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={PlaceHolderImg} alt="" />
            </div>
          </section> */}
        </div>
        <CallToAction />
        <Footer></Footer>
      </article>
    </main>
  );
}

export default ProjectDetail;
