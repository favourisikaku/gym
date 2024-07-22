import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

export const news = [
  {
    id: "1",
    image: "/images/news1 (1).jpg",
    title: "Body Combat",
    detail:
      "BodyCombat is the empowering cardio workout are where you are totally unleashed. This fiercely ...",
  },
  {
    id: "2",
    image: "/images/news2 (1).jpg",
    title: "Running New Trend",
    detail:
      "Running New Trend is the empowering cardio workout are where you are totally unleashed. This fiercely ...",
  },
  {
    id: "3",
    image: "/images/news3 (1).jpg",
    title: "How To Take Meditation",
    detail:
      "Meditation is the empowering cardio workout are where you are totally unleashed. This fiercely ...",
  },
  {
    id: "4",
    image: "/images/news4.jpg",
    title: "Weightlifting Fitness",
    detail:
      "Weightlifting Fitness is the empowering cardio workout are where you are totally unleashed. This fiercely ...",
  },
  {
    id: "5",
    image: "/images/news5.jpg",
    title: "Boxing Courses",
    detail:
      "Boxing is the empowering cardio workout are where you are totally unleashed. This fiercely ...",
  },
  {
    id: "6",
    image: "/images/news1 (1).jpg",
    title: "Body Combat",
    detail:
      "BodyCombat is the empowering cardio workout are where you are totally unleashed. This fiercely ...",
  },
];
const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="about-banner d-flex justify-content-center align-items-center">
          <Fade triggerOnce direction="down">
            <h1 style={{ fontSize: "50px", color: "white" }}>LATEST NEWS</h1>
          </Fade>
        </div>
      </section>
      <section>
        <div className="container">
          <Zoom triggerOnce>
            <div className="news-list row">
              {news.map((item) => (
                <div
                  className="news-card-body mb-4 col-lg-4 col-sm-6 col-md-6"
                  key={item.id}
                >
                  <div className="date">
                    <img src="/images/date-bag.png" />
                    <p>20 Jan 2024</p>
                  </div>
                  <div className="image">
                    <img src={item.image} className="img-fluid" />
                  </div>
                  <div className="news-card-details">
                    <div className=" pt-4 pb-4">
                      <h5 style={{ fontWeight: "600" }} className="mb-4">
                        {item.title}
                      </h5>
                      <div>
                        <p style={{ color: "#666666" }}>{item.detail}</p>
                      </div>
                      <Link to={`/news/${item.id}`}>
                        <button>Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Zoom>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;
