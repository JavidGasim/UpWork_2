import React from "react";
 import "../../assets/css/fontawesome.css";
 import "../../assets/css/owl.css";
import "../../assets/css/style.css";
//import "../../assets/fonts";

export default function HomePage() {
  return (
    <div>
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <h2>
                Job Agency <em>Website</em>
              </h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="jobs.html">
                    Jobs
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="about-us.html">
                    About us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More
                  </a>

                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="team.html">
                      Team
                    </a>
                    <a className="dropdown-item" href="testimonials.html">
                      Testimonials
                    </a>
                    <a className="dropdown-item" href="terms.html">
                      Terms
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="banner header-text">
        <div className="owl-banner owl-carousel">
          <div className="banner-item-01">
            <div className="text-content">
              <h4>Find your car today!</h4>
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </div>
          <div className="banner-item-02">
            <div className="text-content">
              <h4>Fugiat Aspernatur</h4>
              <h2>Laboriosam reprehenderit ducimus</h2>
            </div>
          </div>
          <div className="banner-item-03">
            <div className="text-content">
              <h4>Saepe Omnis</h4>
              <h2>Quaerat suscipit unde minus dicta</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Featured Jobs</h2>
                <a href="jobs.html">
                  view more <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="job-details.html">
                  <img src="../../assets/images/product-1-370x270.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="job-details.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>

                  <h6>$60 000</h6>

                  <h4>
                    <small>
                      <i className="fa fa-briefcase"></i> Medical / Health Jobs{" "}
                      <br />{" "}
                      <strong>
                        <i className="fa fa-building"></i> BMI Kings Park
                        Hospital
                      </strong>
                    </small>
                  </h4>

                  <small>
                    <strong title="Posted on">
                      <i className="fa fa-calendar"></i> 15-06-2020
                    </strong>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Type">
                      <i className="fa fa-file"></i> Contract
                    </strong>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Location">
                      <i className="fa fa-map-marker"></i> London
                    </strong>
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-item">
                <a href="job-details.html">
                  <img src="../../assets/images/product-2-370x270.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="job-details.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>

                  <h6>$60 000</h6>

                  <h4>
                    <small>
                      <i className="fa fa-briefcase"></i> Medical / Health Jobs{" "}
                      <br />{" "}
                      <strong>
                        <i className="fa fa-building"></i> BMI Kings Park
                        Hospital
                      </strong>
                    </small>
                  </h4>

                  <small>
                    <strong title="Posted on">
                      <i className="fa fa-calendar"></i> 15-06-2020
                    </strong>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Type">
                      <i className="fa fa-file"></i> Contract
                    </strong>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Location">
                      <i className="fa fa-map-marker"></i> London
                    </strong>
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-item">
                <a href="job-details.html">
                  <img src="../../assets/images/product-3-370x270.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="job-details.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>

                  <h6>$60 000</h6>

                  <h4>
                    <small>
                      <i className="fa fa-briefcase"></i> Medical / Health Jobs{" "}
                      <br />{" "}
                      <strong>
                        <i className="fa fa-building"></i> BMI Kings Park
                        Hospital
                      </strong>
                    </small>
                  </h4>

                  <small>
                    <strong title="Posted on">
                      <i className="fa fa-calendar"></i> 15-06-2020
                    </strong>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Type">
                      <i className="fa fa-file"></i> Contract
                    </strong>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Location">
                      <i className="fa fa-map-marker"></i> London
                    </strong>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About Us</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <p>
                  Lorem ipsum dolor sit amet, <a href="#">consectetur</a>{" "}
                  adipisicing elit. Explicabo, esse consequatur alias repellat
                  in excepturi inventore ad <a href="#">asperiores</a> tempora
                  ipsa. Accusantium tenetur voluptate labore aperiam molestiae
                  rerum excepturi minus in pariatur praesentium, corporis,
                  aliquid dicta.
                </p>
                <ul className="featured-list">
                  <li>
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="#">Consectetur an adipisicing elit</a>
                  </li>
                  <li>
                    <a href="#">It aquecorporis nulla aspernatur</a>
                  </li>
                  <li>
                    <a href="#">Corporis, omnis doloremque</a>
                  </li>
                </ul>
                <a href="about-us.html" className="filled-button">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="../../assets/images/about-1-570x350.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="services"
        style={{
          backgroundImage: `url('assets/images/other-image-fullscren-1-1920x900.jpg')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest blog posts</h2>

                <a href="blog.html">
                  read more <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <a href="#" className="services-item-image">
                  <img
                    src="../../assets/images/blog-1-370x270.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>

                <div className="down-content">
                  <h4>
                    <a href="#">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      hic
                    </a>
                  </h4>

                  <p style={{ margin: "0" }}>
                    {" "}
                    John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                    &nbsp;&nbsp;|&nbsp;&nbsp; 114
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <a href="#" className="services-item-image">
                  <img
                    src="../../assets/images/blog-2-370x270.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>

                <div className="down-content">
                  <h4>
                    <a href="#">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </a>
                  </h4>

                  <p style={{ margin: "0" }}>
                    {" "}
                    John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                    &nbsp;&nbsp;|&nbsp;&nbsp; 114
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <a href="#" className="services-item-image">
                  <img
                    src="../../assets/images/blog-3-370x270.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>

                <div className="down-content">
                  <h4>
                    <a href="#">Aperiam modi voluptatum fuga officiis cumque</a>
                  </h4>

                  <p style={{ margin: "0" }}>
                    {" "}
                    John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                    &nbsp;&nbsp;|&nbsp;&nbsp; 114
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="happy-clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Happy Clients</h2>

                <a href="testimonials.html">
                  read more <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-clients owl-carousel text-center">
                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="down-content">
                    <h4>John Doe</h4>
                    <p className="n-m">
                      <em>
                        "Lorem ipsum dolor sit amet, consectetur an adipisicing
                        elit. Itaque, corporis nulla at quia quaerat."
                      </em>
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="down-content">
                    <h4>Jane Smith</h4>
                    <p className="n-m">
                      <em>
                        "Lorem ipsum dolor sit amet, consectetur an adipisicing
                        elit. Itaque, corporis nulla at quia quaerat."
                      </em>
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="down-content">
                    <h4>Antony Davis</h4>
                    <p className="n-m">
                      <em>
                        "Lorem ipsum dolor sit amet, consectetur an adipisicing
                        elit. Itaque, corporis nulla at quia quaerat."
                      </em>
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="down-content">
                    <h4>John Doe</h4>
                    <p className="n-m">
                      <em>
                        "Lorem ipsum dolor sit amet, consectetur an adipisicing
                        elit. Itaque, corporis nulla at quia quaerat."
                      </em>
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="down-content">
                    <h4>Jane Smith</h4>
                    <p className="n-m">
                      <em>
                        "Lorem ipsum dolor sit amet, consectetur an adipisicing
                        elit. Itaque, corporis nulla at quia quaerat."
                      </em>
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="down-content">
                    <h4>Antony Davis</h4>
                    <p className="n-m">
                      <em>
                        "Lorem ipsum dolor sit amet, consectetur an adipisicing
                        elit. Itaque, corporis nulla at quia quaerat."
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8">
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque corporis amet elite author nulla.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 text-right">
                    <a href="contact.html" className="filled-button">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <p>
                  Copyright © 2020 Company Name - Template by:{" "}
                  <a href="https://www.phpjabbers.com/">PHPJabbers.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="assets/js/custom.js"></script>
      <script src="assets/js/owl.js"></script>
    </div>
  );
}
