import React, { useEffect } from "react";
import Footer from "./Footer";
import { Fade, Zoom } from "react-awesome-reveal";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      <section>
        <div className="about-banner d-flex justify-content-center align-items-center">
          <Fade triggerOnce direction="down">
            <h1 style={{ fontSize: "50px", color: "white" }}>CONTACT US</h1>
          </Fade>
        </div>
      </section>
      <Zoom triggerOnce>
        <div className="container">
          <div>
            <h2 className="text-center mt-5" style={{ fontWeight: "700" }}>
              CONTACT FORM
            </h2>
          </div>
          <form className=" align-items-center mb-5 pb-5 d-flex justify-content-center ">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 col-sm-8 mb-4 mt-5">
                <label
                  className="visually-hidden "
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Name
                </label>
                <div className="input-group">
                  <div className="input-group-text">
                    <i
                      className="fa fa-user"
                      aria-hidden="true"
                      style={{
                        color: "#fb5b21",
                      }}
                    ></i>
                  </div>
                  <input
                    type="text"
                    className="form-control p-3"
                    id="inlineFormInputGroupUsername"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8  mb-4">
                <label
                  className="visually-hidden"
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Email
                </label>
                <div className="input-group">
                  <div className="input-group-text">
                    {" "}
                    <i
                      aria-hidden="true"
                      className="fas fa-mail-bulk"
                      style={{
                        color: "#fb5b21",
                      }}
                    ></i>{" "}
                  </div>
                  <input
                    type="text"
                    className="form-control p-3"
                    id="inlineFormInputGroupUsername"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 ">
                <label
                  className="visually-hidden"
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Phone
                </label>
                <div className="input-group">
                  <div className="input-group-text">
                    <i
                      className="fa fa-phone"
                      aria-hidden="true"
                      style={{
                        color: "#fb5b21",
                      }}
                    ></i>
                  </div>
                  <input
                    type="text"
                    className="form-control p-3"
                    id="inlineFormInputGroupUsername"
                    placeholder="Phone"
                  />
                </div>
              </div>{" "}
              <div className="form-group col-lg-8 col-md-8 col-sm-8 ">
                <label
                  className="control-label arealebel pull-left"
                  htmlFor="textarea"
                ></label>
                <div className="input-group">
                  <textarea
                    className="textarea form-control"
                    id="form-message"
                    rows="6"
                    name="textarea"
                    placeholder="Message"
                    data-error="Message field is required"
                    required=""
                  ></textarea>
                </div>
              </div>
              <div className="contact-btn col-lg-8 col-md-8 col-sm-8  mt-5">
                <button
                  type="submit"
                  className="col-lg-12 col-md-12 col-sm-12 btn  p-4"
                  style={{
                    backgroundColor: "#fb5b21",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </Zoom>
      <Footer />
    </>
  );
};

export default Contact;
