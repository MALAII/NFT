import "./galleryanima.css"

export const Lightbox = ({ image, onClose }) => {
  return (
    <div className="lightbox-backdrop" onClick={onClose}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
         <button className="close-bttn" onClick={onClose}>×</button>
        <img src={image.url} alt={image.title} className="lightbox-image" />
       
        {/* <div className="image-info">{image.title}</div> */}
      </div>
    </div>
  );
};