import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Zoom triggerOnce>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-company  pb-4">
                  <h3>About Company</h3>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore repellendus consectetur reiciendis distinctio optio
                    quibusdam error sed obcaecati nam illum?
                  </p>
                </div>
                <div></div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="corporate-office-header pb-4">
                  <h3>Corporate office</h3>
                </div>
                <div className="corporate-office-header-details">
                  <div className="d-flex align-items-center mb-3">
                    <i aria-hidden="true" className="fas fa-map-marked-alt"></i>
                    <p>44 New Design Street, road 005</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>+234 123 456 7890</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i aria-hidden="true" className="fas fa-mail-bulk"></i>{" "}
                    <p>info@yahoo.com</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-fax" aria-hidden="true"></i>
                    <p>Fax: (123) 4567890</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="follow-us  pb-4">
                  <h3>Follow Us</h3>
                </div>
                <div className="socials d-flex  pb-5">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                  <i className="fab fa-pinterest" aria-hidden="true"></i>
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-header">
            <div className="container">
              <p className="copyright">
                © Copyrights gymedge 2024. All rights reserved. Designed by{" "}
                <span>Favour Isikaku</span>
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Footer;
