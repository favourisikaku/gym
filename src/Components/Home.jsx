import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Trainers from "./Trainers";
import {
  Bounce,
  Fade,
  Flip,
  JackInTheBox,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const Home = () => {
  const [count, setcount] = useState(0);
  const [trainers, settrainers] = useState(0);
  const [awards, setawards] = useState(0);
  const [equipments, setequipments] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let countInterval;
    let trainersInterval;
    let awardsInterval;
    let equipmentsInterval;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          countInterval = setInterval(() => {
            setcount((prevCount) => (prevCount < 525 ? prevCount + 1 : 525));
          }, 10);
          trainersInterval = setInterval(() => {
            settrainers((prevCount) => (prevCount < 8 ? prevCount + 1 : 8));
          }, 650);
          awardsInterval = setInterval(() => {
            setawards((prevCount) => (prevCount < 69 ? prevCount + 1 : 69));
          }, 70);
          equipmentsInterval = setInterval(() => {
            setequipments((prevCount) => (prevCount < 45 ? prevCount + 1 : 45));
          }, 100);
        } else {
          clearInterval(countInterval);
          clearInterval(trainersInterval);
          clearInterval(awardsInterval);
          clearInterval(equipmentsInterval);
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
      clearInterval(countInterval);
      clearInterval(trainersInterval);
      clearInterval(awardsInterval);
      clearInterval(equipmentsInterval);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workouts = [
    { id: "1", image: "/images/feature1.jpg", workout: "Weight Lifting" },
    { id: "2", image: "/images/feature2.jpg", workout: "Daily Yoga" },
    { id: "3", image: "/images/feature3.jpg", workout: "Running Way" },
    { id: "4", image: "/images/feature4.jpg", workout: "Free Hand" },
    { id: "5", image: "/images/feature1.jpg", workout: "Weight Lifting" },
    { id: "6", image: "/images/feature3.jpg", workout: "Running Way" },
  ];

  const news = [
    {
      id: "1",
      image: "/images/news1.jpg",
      workout: "Body Combat ",
      detail:
        "BodyCombat is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...",
    },
    {
      id: "2",
      image: "/images/news2.jpg",
      workout: "Zumba Fitness",
      detail:
        "Zumba Fitness is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...",
    },
    {
      id: "3",
      image: "/images/news3.jpg",
      workout: "Running Practice",
      detail:
        "Running Practice is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...",
    },
    {
      id: "4",
      image: "/images/news1.jpg",
      workout: "Body Combat",
      detail:
        "BodyCombat is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...",
    },
    {
      id: "5",
      image: "/images/news2.jpg",
      workout: "Zumba Fitness",
      detail:
        "Zumba Fitness is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...",
    },
    {
      id: "6",
      image: "/images/news3.jpg",
      workout: "Running Practice",
      detail:
        "Running Practice is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...",
    },
  ];

  const plans = [
    {
      id: "1",
      name: "STANDARD",
      price: "$99",
      workout1: "Free Hand",
      workout2: "Gym Fitness",
      workout3: "Running",
    },
    {
      id: "2",
      name: "PREMIUM",
      price: "$199",
      workout1: "Free Hand",
      workout2: "Gym Fitness",
      workout3: "Running",
      workout4: "Yoga",
    },
    {
      id: "3",
      name: "PLATINUM",
      price: "$99",
      workout1: "Free Hand",
      workout2: "Gym Fitness",
      workout3: "Running",
      workout4: "Yoga",
      workout5: "Body Building",
    },
  ];
  return (
    <>
      <section className="section1-home-img d-flex justify-content-center align-items-center">
        <Zoom triggerOnce>
          <div className="text-center">
            <h1>
              BUILD <span>YOUR</span> BODY <span>STRONG</span>
            </h1>
            <div className="d-flex justify-content-center align-items-center">
              <p className="">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the idustry's standard type specimen book.
                It has survived not only five centuries.
              </p>
            </div>
            <button>JOIN WITH US</button>
          </div>
        </Zoom>
      </section>

      <section>
        <div className="d-flex justify-content-center align-items-center row home-section2-header">
          <div className="home-section2 col-lg-6 col-md-6">
            <Fade triggerOnce direction="left">
              <div className="">
                <div className="">
                  <div className="">
                    <img
                      src="/images/about-fitness-img.png "
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <h1>
                      All <span>About</span> Fitness
                    </h1>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div
            className="col-lg-6 col-md-6  about-fitness-details"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <Fade triggerOnce direction="right">
              <div className="d-flex about-fitness-details-header">
                <i className="fa-solid fa-dumbbell"></i>
                <div className="about-fitness-details-weight">
                  <h2 style={{ fontWeight: "600" }}>Weight Lifting</h2>
                  <p style={{ color: "#666666" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat vitae, animi ipsam, modi tempore enim beatae eius
                    deserunt distinctio.
                  </p>
                </div>
              </div>
              <div className="d-flex about-fitness-details-header">
                <i className="fa-solid fa-person-running"></i>
                <div>
                  <h2 style={{ fontWeight: "600" }}>Running</h2>
                  <p style={{ color: "#666666" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat vitae, animi ipsam, modi tempore enim beatae eius
                    deserunt distinctio.
                  </p>
                </div>
              </div>
              <div className="d-flex about-fitness-details-header">
                <i className="fa-solid fa-heart"></i>
                <div>
                  <h2 style={{ fontWeight: "600" }}>Yoga</h2>
                  <p style={{ color: "#666666" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat vitae, animi ipsam, modi tempore enim beatae eius
                    deserunt distinctio.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section>
        <div className="container home-section3 mb-5">
          <Fade triggerOnce direction="down">
            <div className="mt-5 mb-3">
              <h2 style={{ fontWeight: "600" }}>FEATURED CLASSES</h2>
            </div>
            <div className="swipe-indicator mb-4">Swipe to view more</div>
          </Fade>
          <div className="workout-list d-flex">
            <Zoom triggerOnce>
              {workouts.map((item) => (
                <div className="card-body me-3" key={item.id}>
                  <div>
                    <img src={item.image} alt={item.workout} />
                    <div className="card-time">
                      <h6>06:00AM</h6>
                      <h6>16 JAN</h6>
                    </div>
                  </div>
                  <div className="card-details">
                    <div className="ms-4 pt-4 pb-4">
                      <h5 style={{ fontWeight: "600" }}>{item.workout}</h5>
                      <div>
                        <i></i>
                        <p>Jhon Carry</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Zoom>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#f5f5f5", paddingTop: "100px" }}
        className="being-body-container"
      >
        <div className="container">
          <Zoom triggerOnce>
            <div className=" row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <img src="/images/being-builder.png" className="img-fluid" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 being-body">
                <h2>
                  BEING <span>BODY</span>
                </h2>
                <p>BUILDERS</p>
              </div>
            </div>
          </Zoom>
        </div>
      </section>

      <Trainers />

      <section>
        <div className="pricing-section">
          <div className="container">
            <div>
              <Fade triggerOnce direction="down">
                <h2
                  style={{ color: "white", fontWeight: "600" }}
                  className="pt-5 pb-4"
                >
                  OUR PRICING TABLE
                </h2>
              </Fade>
            </div>
            <div className="container">
              <Zoom triggerOnce>
                <div className="pricing-container row">
                  {plans.map((item) => (
                    <div
                      className="pricing-header col-lg-3 col-md-3 "
                      key={item.id}
                    >
                      <div>
                        <h5 className="pt-5 pb-3">{item.name}</h5>
                      </div>
                      <div className="pb-4">
                        <h1>
                          {item.price}
                          <span>/Month</span>
                        </h1>
                      </div>
                      <div>
                        <p>{item.workout1}</p>
                        <p>{item.workout2}</p>
                        <p>{item.workout3}</p>
                        <p>{item.workout4 || "------"}</p>
                        <p>{item.workout5 || "------"}</p>
                      </div>
                      <div className="pb-5">
                        <button>DETAILS</button>
                      </div>
                    </div>
                  ))}
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container home-section4">
          <div className="mt-5 mb-5">
            <Fade triggerOnce direction="down">
              <h2 style={{ fontWeight: "600" }}>OUR GALLERY</h2>
            </Fade>
          </div>
          <Fade triggerOnce direction="up">
            <div className="d-flex mb-5">
              <img src="/images/1.jpg" className="img-fluid" />
              <img src="/images/2.jpg" className="img-fluid" />
              <img src="/images/3.jpg" className="img-fluid" />
              <img src="/images/4.jpg" className="img-fluid" />
              <img src="/images/5.jpg" className="img-fluid" />
              <img src="/images/6.jpg" className="img-fluid" />
            </div>
          </Fade>
        </div>
      </section>

      <section>
        <Zoom triggerOnce>
          <div className="counter-header">
            <div className="container">
              <div className="row  counter-details" ref={counterRef}>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <h1>{count}</h1>
                  <p>Satisfied Customers</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <h1>{trainers}</h1>
                  <p>Trainers</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <h1>{awards}</h1>
                  <p>Received Awards</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <h1>{equipments}</h1>
                  <p>Equpments</p>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </section>

      <section>
        <div className="container home-section5">
          <div className="mt-5 ">
            <Fade triggerOnce direction="down">
              <h2 style={{ fontWeight: "600" }}>LATEST NEWS</h2>
            </Fade>
          </div>
          <div className="swipe-indicator mb-4">Swipe to view more</div>

          <div className="workout-list d-flex">
            <Fade triggerOnce>
              {news.map((item) => (
                <div className="news-card-body me-3" key={item.id}>
                  <div className="image">
                    <img src={item.image} />
                  </div>
                  <div className="news-card-details">
                    <div className=" pt-4 pb-4">
                      <h5 style={{ fontWeight: "600" }} className="mb-4">
                        {item.workout}
                      </h5>
                      <div>
                        <p style={{ color: "#666666" }}>{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
