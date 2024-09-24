import "./ProjectThumbnail.css";
import Button from "../Button/Button.jsx";

function ProjectThumbnail({ image, title, description, buttons, isFeatured }) {
  return (
    <div className={`project-thumbnail ${isFeatured ? "featured" : ""}`}>
      <div className="img-wrapper">
        <img src={image} alt={title} className="project-thumbnail__image" />
      </div>
      <div className="project-thumbnail__content">
        <div className="title-wrapper">
          <h3 className="project-thumbnail__title">{title}</h3>
        </div>
        <div className="project-thumbnail__text">
          <p className="project-thumbnail__description">{description}</p>
          <div className="project-thumbnail__buttons">
            {buttons.map((button, index) => (
              <Button
                key={index}
                onClick={button.onClick}
                variant={button.variant || "default"}
                type={button.type || "button"}
                hasArrow={true}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
