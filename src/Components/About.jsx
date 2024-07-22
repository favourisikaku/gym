import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Trainers from "./Trainers";
import { Fade, Zoom } from "react-awesome-reveal";

const About = () => {
  const [recommendation, setRecommendation] = useState(0);
  const [clients, setClients] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let recommendationInterval;
    let clientsInterval;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          recommendationInterval = setInterval(() => {
            setRecommendation((prevCount) =>
              prevCount < 80 ? prevCount + 1 : 80
            );
          }, 60);
          clientsInterval = setInterval(() => {
            setClients((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
          }, 50);
        } else {
          clearInterval(recommendationInterval);
          clearInterval(clientsInterval);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
      clearInterval(recommendationInterval);
      clearInterval(clientsInterval);
    };
  }, []);
  return (
    <>
      <section>
        <div className="about-banner d-flex justify-content-center align-items-center">
          <Zoom triggerOnce>
            <h1 style={{ fontSize: "50px", color: "white" }}>ABOUT US</h1>
          </Zoom>
        </div>
      </section>

      <section>
        <div className="container about-details mt-5 pt-5 pb-5 mb-5">
          <div className="row d-flex">
            <div className="col-lg-7 col-md-7 col-sm-7 ">
              <Fade triggerOnce direction="down">
                <h1>
                  ABOUT <span>G</span>YM <span>EDGE</span>
                </h1>
              </Fade>

              <h2></h2>
              <Fade triggerOnce direction="up">
                <p>
                  Quisque et lectus pulvinar, porttitor mi non, elementum dui.
                  Morbi mi nisl, tincidunt sed venenatis eget, finibus eu
                  mauris. Nullam nisi lacus, feugiat eget varegeellentesque
                  dictum odio. Sed sollicitudin viverra est, at aliquam metus
                  ultrices id. Duis eu purus vel nisl commodo facilisis vitae ut
                  lectus. Sed elementum dapibus tellus, a dictum metus interdum
                  ac. Nullam condimentum, dui volutpat fringilla molestie,
                  libero tortor ultrices lorem, at tempus diam purus non velit.
                  Aliquam vel nulla eleifend, consequat elit id, tristique
                  massa. Fusce dolor velit, blandit ac erat ac, vestibulum
                  ornare diam. Sed sollicitudin viverra est, at aliquam metu
                  eratys ultrices tristique massaid.diam purus non velit.
                  Aliquam vel nulla eleifend, consequat elit id, tristique
                  massa. Fusce dolor velit, blandit ac erat ac, vestibulum
                  ornare diam. Sed sollicitudin viverra.
                </p>
              </Fade>
              <Fade triggerOnce direction="up">
                <div>
                  <div className="mt-3 mb-4 d-flex align-items-center ">
                    <i className="fa fa-check me-4" aria-hidden="true"></i>
                    <h6 style={{ fontWeight: "800", fontSize: "16px" }}>
                      We have Gym Trainer
                    </h6>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, repellat officia eveniet itaque voluptatibus rem
                    ex. Molestias, neque dolores, corporis quasi, corrupti nihil
                    maiores dolor voluptates tempora veritatis rem et.
                  </p>
                </div>
              </Fade>

              <Fade triggerOnce direction="up">
                <div>
                  <div className="mt-3 mb-4 d-flex align-items-center">
                    <i className="fa fa-check me-4" aria-hidden="true"></i>

                    <h6 style={{ fontWeight: "800", fontSize: "16px" }}>
                      Modern Gym & Fitness Facilities
                    </h6>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur quo debitis quasi vero modi sit libero repellat,
                    iste sapiente porro illum. Quod qui veniam praesentium quis
                    eveniet temporibus, commodi consequuntur!
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              {" "}
              <Zoom triggerOnce>
                <img src="/images/about-right-img.png" className="img-fluid" />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Zoom triggerOnce>
          <div className="about-section2 ">
            <div className="container " ref={counterRef}>
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7">
                  <h2 className="mb-4" style={{ fontWeight: "600" }}>
                    Why Choose Us?
                  </h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe ipsum veniam dolor laudantium, enim eius magnam quos!
                    Voluptate consequatur facilis non facere incidunt eaque
                    ullam velit earum alias? Consectetur illo reiciendis tempore
                    earum similique doloribus numquam nisi quas, possimus
                    ratione quia molestias atque dolore perspiciatis
                    repudiandae, ex voluptate, quaerat ipsa eum praesentium
                    error cupiditate quo officia aliquid? Quod, architecto,
                    ipsum suscipit recusandae velit minus doloremque.
                  </p>
                </div>
                <div className="counter-image-header col-lg-5 col-md-5 col-sm-5">
                  <div className="counter-image me-4">
                    <div>
                      <img
                        src="/images/counter-circle.png"
                        className="img-fluid"
                      />
                      <div className="details1">
                        <h1>
                          {recommendation}
                          <span>%</span>
                        </h1>
                        <p>Recommendation</p>
                      </div>
                    </div>
                  </div>
                  <div className="counter-image">
                    <div>
                      <img
                        src="/images/counter-circle.png"
                        className="img-fluid"
                      />
                      <div className="details2">
                        <h1>
                          {clients}
                          <span>%</span>
                        </h1>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </section>
      <Trainers />
      <Footer />
    </>
  );
};

export default About;
