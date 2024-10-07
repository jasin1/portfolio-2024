import "./ImageBlock.css";
import { getImagePath } from "../../helpers/imageHelpers";

function ImageBlock ({ content }){
  const layoutClass = content.length > 1 ? 'image-pair' : 'image-full';
  return(
    <div className={`img-wrapper ${layoutClass}`}>
      {content.map((image, index)=>(
        <img key={index} src={getImagePath(image.src)} alt={image.alt}/>
      ))}
    </div>
  );


}

export default ImageBlock;