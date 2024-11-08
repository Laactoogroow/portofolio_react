import "../styles/Gallery.css";
import { galleryList } from "../data/DataGallery";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery" id="Gallery">
      <div className="wrapper">
        <h3>Gallery</h3>
        <div className="grid">
          {galleryList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <Link to={`/Gallery/${item.id}`}>
                  <img src={item.image}/>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
