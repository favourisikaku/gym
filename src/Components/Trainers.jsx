import React from "react";
import { Fade } from "react-awesome-reveal";

const Trainers = () => {
  const trainer = [
    {
      id: "1",
      name: "John Smith",
      workout: "Weight Lifting",
      image: "/images/trainer3.jpg",
    },
    {
      id: "2",
      name: "David Fahim",
      workout: "Body Builder",
      image: "/images/trainer4.jpg",
    },
    {
      id: "3",
      name: "jecy Deoko",
      workout: "Running Specialist",
      image: "/images/trainer2.jpg",
    },
    {
      id: "4",
      name: "Jane Deo",
      workout: "Weight Lifting",
      image: "/images/trainer1.jpg",
    },
    {
      id: "5",
      name: "John Smith",
      workout: "Weight Lifting",
      image: "/images/trainer3.jpg",
    },
  ];
  return (
    <>
      <section>
        <div className="trainer-section">
          <div className="container pt-5">
            <div>
              <Fade triggerOnce direction="down">
                <h2
                  style={{ color: "black", fontWeight: "600" }}
                  className="pt-5"
                >
                  EXPERT TRAINERS
                </h2>
                <div className="swipe-indicator">Swipe to view more</div>
              </Fade>
            </div>
            <div className="container">
              <Fade triggerOnce direction="up">
                <div className="trainer-header-section row">
                  {trainer.map((item) => (
                    <div
                      className="trainer-header me-4 col-lg-4 col-md-6 col-sm-6"
                      key={item.id}
                    >
                      <div>
                        <div>
                          <img src={item.image} className="img-fluid" />
                        </div>
                      </div>
                      <div className="details">
                        <h5 style={{ fontWeight: "600" }} className="">
                          {item.name}
                        </h5>
                        <h6>{item.workout}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainers;
