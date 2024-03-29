import React from "react";
import { getDataCertified } from "../utils/certified";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Certified() {
  const certified = getDataCertified();

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#ffffff", // Ubah warna panah
    fontSize: "24px", // Ubah ukuran panah
    background: "rgba(0, 0, 0, 0.5)", // Ubah warna latar belakang panah
    padding: "10px", // Ubah ukuran padding panah
    borderRadius: "50%", // Agar tombol panah menjadi lingkaran
  };

  const nextArrow = (
    <FontAwesomeIcon
      icon={faChevronRight}
      style={{ ...arrowStyles, left: "94%" }}
    />
  );
  const prevArrow = (
    <FontAwesomeIcon
      icon={faChevronLeft}
      style={{ ...arrowStyles, left: "4%" }}
    />
  );

  return (
    <>
      <div>
        <h2 className="text-center text-white p-4"><b>My Certification</b> </h2>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="certified position-relative bg-secondary">
          <Slide
            easing="ease"
            nextArrow={nextArrow}
            prevArrow={prevArrow}
            autoplay={true}
            duration={1000}
          >
            {certified.map((certificate) => (
              <div key={certificate.id} className="each-slide">
                <img
                  src={certificate.imageUrl}
                  alt={`Certificate ${certificate.id}`}
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <button type="button" class="btn btn-warning mt-5 px-5 col-md-4 offset-md-4"><b>View All</b></button>
    </>
  );
}

export default Certified;
