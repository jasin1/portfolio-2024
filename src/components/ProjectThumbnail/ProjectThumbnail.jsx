import './ProjectThumbnail.css';
import Button from '../Button/Button.jsx';

function ProjectThumbnail({image, title, description, buttons, isFeatured}){
  return(
    <div className={`project-thumbnail ${isFeatured ? 'featured': ''}`}>
      <img src={image} alt={title} className="project-thumbnail__image" />
      <div className="project-thumbnail__content">
        <h3 className="project-thumbnail__title">{title}</h3>
        <p className="project-thumbnail__description">{description}</p>
      </div>
      <div className="project-thumbnail__buttons">
        {buttons.map((button, index)=>(
          <Button
          key={index}
          onClick={button.onClick}
          variant={button.variant || 'default'}
          type={button.type || 'button'}
          hasArrow={true}
          ></Button>
        ))}
      </div>
    </div>

  )
}

export default ProjectThumbnail;