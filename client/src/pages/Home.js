import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/expe.png";

const Home = () => {
  return (
    <>
      <section className="position-relative pb-5" style={{height: "100vh", backgroundColor: "black" }}>
        <img
          className="d-none d-lg-block position-absolute top-0 start-0 bottom-0 w-70 h-100 img-fluid"
          style={{ objectFit: "cover" }}
          src={bg}
          alt=""
        />
        <div className="position-relative">
          <div className="container">
            <div className="row pt-5">
              <div className="col-12 col-lg-5 ms-auto">
                <div className="mb-5">
                  <h2 className="display-4 fw-bold mb-5 text-white">
                  Track your spending, steer your financial destiny.
                  </h2>
                  <p className="lead text-white mb-5">
                   
                     <code style={{ color: '#ee9b00' }}>Unlock the power of financial clarity with a unified dashboard for your income and expenses. </code>
                  </p>

                  <div className="d-flex flex-wrap">
                    <Link
                      to="/profile"
                      className="btn btn-secondary me-2 mb-2 mb-sm-0"
                    >
                      Track your Expenses
                    </Link>
                  </div>
                </div>
                <div className="row align-items-center pt-5">
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/slack.png"
                      alt=""
                    />
                  </div>
                  {/* ... (similar blocks for other logos) ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
