import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FaInstagram } from "react-icons/fa";
import { FaBeer, FaFacebook } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <div className="container text-center text-md-light mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light" />
              <i className="fas fa-gem me-3 text-light"></i>
              <h3 className="text-light">Наши соцсети:</h3>
              <div>
                <a
                  href="https://www.facebook.com/reglatconstruct/"
                  className="me-9 text-light"
                >
					<FaFacebook />
                  <i className="fa fa-facebook-f fa-2x facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/reglatconstruct/"
                  className="me-9 text-light"
                >
                   <FaInstagram />

                  <i className="fa fa-instagram fa-2x instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4 text-light">Меню</h4>
              <p>
                <a href="index.html" className="text-light a">
                  Услуги
                </a>
              </p>
              <p>
                <a href="produse.html" className="text-light a">
                  Товары
                </a>
              </p>
              <p>
                <a href="about.html" className="text-light a">
                  О нас
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4 text-light">
                Свяжитесь С Нами
              </h4>
              <p className="text-light">
                <i className="fa fa-home me-3 text-light"></i> Chișinău, Str.
                Sarmizegetusa 92
              </p>
              <p className="text-light">
                <i className="fa fa-envelope me-3 text-light"></i>
                reglat.cons@gmail.com
              </p>
              <p className="text-light">
                <i className="fa fa-phone me-3 text-light"></i> +(373) 79 792
                425
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
