import { useNavigate } from "react-router-dom";
import "./ProjectThumbnail.css";
import Button from "../Button/Button.jsx";
import Tag from "../Tag/Tag.jsx";

function ProjectThumbnail({
  image,
  title,
  description,
  buttons,
  isFeatured,
  tags = [],
}) {
  const navigate = useNavigate();

  // const renderButtons = (buttons) => {
  //   return buttons.map((button, index) => (
  //     <Button
  //       key={index}
  //       onClick={button.linkType === "internal" ? () => navigate(button.href) : undefined}
  //       href={button.linkType === "external" ? button.href : undefined}
  //       variant={button.variant || "default"}
  //       type={button.type || "button"}
  //       hasArrow={button.hasArrow || false} // Ensure 'hasArrow' is controlled
  //     >
  //       {button.text}
  //     </Button>
  //   ));
  // };


  return (
    <div className={`project-thumbnail ${isFeatured ? "featured" : ""}`}>
      <div className="img-wrapper">
        <img src={image} alt={title} className="project-thumbnail__image" />
      </div>
      <div className="project-thumbnail__content">
        <div className="title-wrapper">
          <h3 className="project-thumbnail__title">{title}</h3>
          <div className="tag-wrapper">
            {tags.length > 0 &&
              tags.map((tag, index) => <Tag key={index} name={tag}></Tag>)}
          </div>
        </div>
        <div className="project-thumbnail__text">
          <p className="project-thumbnail__description">{description}</p>
          <div className="project-thumbnail__buttons">
            {buttons.map((button, index) => (
              <Button
                key={index}
                onClick={
                  button.linkType === "internal"
                  ? () => navigate(button.href) : undefined
                }
                href={button.linkType === "external" ? button.href : undefined}
                variant={button.variant || "default"}
                type={button.type || "button"}
                hasArrow={true}
              >
                {button.text}
              </Button>
              
            ))}
            {/* {renderButtons(buttons || [])} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
