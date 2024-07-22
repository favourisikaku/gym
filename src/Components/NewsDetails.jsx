import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import { Fade, Zoom } from "react-awesome-reveal";

const NewsDetails = ({ news }) => {
  const { id } = useParams();
  const newsItem = news.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!newsItem ? (
        <Navigate to="/news" />
      ) : (
        <>
          <section>
            <div className="about-banner d-flex justify-content-center align-items-center">
              <Fade triggerOnce direction="down">
                <h1 style={{ fontSize: "50px", color: "white" }}>
                  NEWS DETAILS
                </h1>
              </Fade>
            </div>
          </section>

          <section className="mb-5 pb-5 news-details-section">
            <div className="container" style={{ color: "#666666" }}>
              <div className="row d-flex justify-content-center mt-5 pt-5 news-details-header-image">
                <Zoom triggerOnce>
                  <img className=" col-lg-8 img-fluid " src={newsItem.image} />
                </Zoom>
              </div>
              <div>
                {" "}
                <Fade triggerOnce direction="down">
                  <h3
                    style={{ color: "black", fontWeight: "600" }}
                    className="mt-5 mb-4"
                  >
                    {newsItem.title}
                  </h3>
                </Fade>
              </div>
              <Fade triggerOnce direction="up">
                <div>
                  <div>
                    <i></i>
                    <p>03 Feb 2024</p>
                  </div>
                  <div className="d-flex align-items-center news-details-trainer">
                    <i
                      className="fa fa-user me-2"
                      aria-hidden="true"
                      style={{
                        color: "#fb5b21",
                      }}
                    ></i>
                    <p>
                      {" "}
                      Trainer:
                      <span style={{ color: "#fb5b21" }}> John Smith</span>{" "}
                    </p>
                  </div>
                </div>
              </Fade>
              <div className="news-details-border"></div>
              <div>
                <Fade triggerOnce direction="up">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nemo sequi ipsa ratione soluta maiores inventore saepe
                    sint adipisci, necessitatibus quod tempore vero! Delectus
                    modi laudantium assumenda eos minima obcaecati, eum aliquam
                    vitae saepe accusantium tempora quo est eius! Quibusdam
                    praesentium possimus architecto asperiores excepturi,
                    sapiente dolor molestiae cum fugit repellat placeat est
                    doloremque doloribus iste ea deleniti harum nulla ipsam
                    eveniet natus amet? Officia ipsa dolorem sequi! Numquam
                    libero, tempora voluptatibus nostrum unde optio vero iure
                    veniam fugit maxime non obcaecati sunt quod minima
                    consequuntur voluptate modi tempore! Maxime!
                  </p>
                </Fade>
                <p className="news-details-text-border"></p>
              </div>
              <div>
                <Fade triggerOnce direction="down">
                  <h4
                    style={{ color: "black", fontWeight: "700" }}
                    className="mb-4"
                  >
                    Comments
                  </h4>
                </Fade>
              </div>
              <Fade triggerOnce direction="down">
                <div className="d-flex align-items-center comments-details">
                  <div style={{ width: "15%" }} className="image-header">
                    <img
                      src="/images/comment.jpg"
                      className="img-fluid"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="ms-4">
                    <h5 style={{ color: "black" }}>
                      <strong>Dr. Jessy Robot</strong>
                    </h5>
                    <h6 style={{ color: "#979797" }}>
                      February 03, 2024 @ 09:21
                    </h6>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia illum ut quasi, at quo eveniet? Eius repellat
                      adipisci odit cumque officiis dolore vel itaque mollitia
                      facere. Facilis quasi facere tenetur.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default NewsDetails;
