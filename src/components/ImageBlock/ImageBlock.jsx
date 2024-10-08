import "./ImageBlock.css";
import { getImagePath } from "../../helpers/imageHelpers";

function ImageBlock ({ content }){
  const layoutClass = content.length > 1 ? 'image-pair' : 'image-full';
  return(
    <div className={`image-grid ${layoutClass}`}>
      {content.map((image, index)=>(
        <div key={index} className="img-wrapper">
          <img src={getImagePath(image.src)} alt={image.alt}/>
        </div>
      ))}
    </div>
  );


}

export default ImageBlock;