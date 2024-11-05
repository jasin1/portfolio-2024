import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import projectsData from "../../data/projects.json";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
// import PlaceHolderImg from "../../assets/placeHolderImg.jpg";
import Tag from "../../components/Tag/Tag.jsx";
import Button from "../../components/Button/Button.jsx";
import { getImagePath } from "../../helpers/imageHelpers.js";
import TextBlock from "../../components/TextBlock/TextBlock.jsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.jsx";
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock.jsx";
import headingBlock from "../../components/headingBlock/headingBlock.jsx";

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
    heading: headingBlock,
  };


  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <section className="hero-secondPage">
            <h1>{project.title}</h1>
            {project.noteText && (
              <p className="note-text">{project.noteText}</p>
            )}
            <div className="sub-container">
              <div className="tag-wrapper">
                {project.tags.map((tag, index) => (
                  <Tag key={index} name={tag}></Tag>
                ))}
              </div>
              <div className="buttons-wrapper">
                {project.buttons &&
                  project.buttons.map((button, index) => (
                    <Button
                      key={index}
                      variant={button.variant}
                      type="button"
                      hasArrow={button.hasArrow}
                      href={button.href}
                    >
                      {button.text}
                    </Button>
                  ))}
              </div>
            </div>
          </section>
          <section>
            <div className="img-wrapper img-main">
              <img src={getImagePath(project.thumbnail)} alt="" />
            </div>
            <div className="content-wrapper">
           
              {project.contentBlock.map((block, index) => {
                console.log("blockType", block.type);
                const BlockComponent = componentMap[block.type];
                const isHeadingBlock = block.type === "heading";

                // Determine if the previous block was a heading
                const addMarginClass =
                  index > 0 &&
                  project.contentBlock[index - 1].type === "heading";

                return (
                  <div
                    key={index}
                    className={`content-block type-${block.type} ${
                      addMarginClass ? "margin-large" : ""
                    }`}
                  >
                    {BlockComponent && (
                      <BlockComponent
                        {...(isHeadingBlock
                          ? {
                              level: block.level,
                              headingText: block.headingText,
                            }
                          : { content: block.content })}
                      />
                    )}
                  </div>
                );
              })}
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
