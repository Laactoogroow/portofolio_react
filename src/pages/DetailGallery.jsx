import { useParams, Navigate } from "react-router-dom";
import "../styles/DetailGallery.css";
import { galleryList } from "../data/DataGallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function DetailGallery() {
  const { id } = useParams();
  const data = galleryList.find((item) => item.id === id);
  if (data === undefined) {
    return <Navigate to='/page-not-found' />
  }

  console.log(data);
  return (
    <>
      <Navbar />
      <section id="detail-gallery">
        <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image} />
          <p className="deskripsi"><b>Desk: </b>{data.deskripsi}</p>
        </div>
      </section>
      <Footer />
      <ScrollToTop/>
    </>
  );
}

export default DetailGallery;
