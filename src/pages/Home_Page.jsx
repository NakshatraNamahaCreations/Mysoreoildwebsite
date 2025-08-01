{/*import Navbar_Menu from "../components/Navbar_Menu";
import {
  Container,
  Button,
  Form,
  FormControl,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import Products_Sliders from "./Products_Sliders";
import oilassurance from "/media/oilassurance.png";
import FeatureGrid from "./FeatureGrid";
import Reviews from "./Reviews";
// import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import oilproducts from "/media/Group334.png";
import MysuruOilsLogo from "/media/MysuruOilsLogo.png";
import purehealthy from "/media/Group333.png";
import naturecontent from "/media/Fromnaturetoyourkitchen.png";
import Qualityassured from "/media/Qualityassured.png";
import Chemicalfree from "/media/Chemicalfree.png";
import plantbased from "/media/plantbased.png";
import LowCholesterol from "/media/LowCholesterol.png";
import WeightManagement from "/media/WeightManagement.png";
import PureAndNatural from "/media/PureAndNatural.png";
import ColdPressed from "/media/ColdPressedExcellenceIcon.png";
import Handcraftedwithcare from "/media/Handcraftedwithcare.png";
import UnfilteredPurity from "/media/UnfilteredPurity.png";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import BrowserSlider from "./BrowserSlider";
import Footer from "../components/Footer";


export default function Home_Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar_Menu />
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
       
          {/* BANNER */}
       {/*}   <div className="banner" >
          
          <Container  style={{ padding: "5% 0", position: "relative", bottom:"100px" }} >
            <Row>
              <Col sm={12}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    padding: "10px",
                    
                    
                  }}
                >
                 
                
 <img
    src={MysuruOilsLogo}
    alt="Logo"
    style={{
      width: "100%",
      maxWidth: "400px",
      height: "auto",
      objectFit: "cover",
      position: "relative", 
      zIndex: 99,
      
}}
  />

                  <img
                    src={purehealthy}
                    alt="Pure-Health"
                    style={{
                      width: "80%",
                      maxWidth: "400px",
                      height: "auto",
                      objectFit: "cover",
                      
                    }}
                  />
                  <img
                    src={naturecontent}
                    alt="Nature Content"
                    style={{
                      width: "40%",
                      maxWidth: "300px",
                      height: "auto",
                      objectFit: "cover",
                      
                    }}
                  />
                </div>
                 <div className="banner" >
          {/* NAVBAR MENU */}
          {/* <Navbar_Menu /> */}

          {/* SEARCH */}
          {/*<Container className="mt-3 ">
            <InputGroup
              className="mb-5 footer-subscribe-input"
              style={{
                maxWidth: "750px",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form.Control
                placeholder="Search our products..."
                style={{
                  borderRadius: "5px",
                  fontSize: "16px",
                  color: "#002209",
                  fontWeight: "500",
                  
                }}
                className="me-2 search-input input-account-forms"
              />

              <div
                className="search-button-slider"
                style={{
                  padding: "5px 24px",
                  textAlign: "center",
                  cursor:"pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                SEARCH
              </div>
            </InputGroup>
          </Container>*/}
      {/*}    <div >
          <BrowserSlider/>
          </div>
</div>
              </Col>
                  
             {/*} <Col sm={6}>
                <div>
                  <img
                    src={oilproducts}
                    alt="Mysore Oils Products"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>*/}
          {/*}  </Row>
                </Container>
          </div>
          
            <div style={{ position: "absolute" }}>
              <div
                style={{
                  backgroundColor: "#D3B353",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: "30px",
                  padding: "10px 20px",
                }}
              >
               
                <img
                  src={Qualityassured}
                  alt="Quality Assured"
                  style={{ width: "8%", height: "auto", objectFit: "cover" }}
                />
                <img
                  src={Chemicalfree}
                  alt="Chemical Free"
                  style={{ width: "7%", height: "auto", objectFit: "cover" }}
                />
                <img
                  src={plantbased}
                  alt="Plant Based"
                  style={{ width: "7.5%", height: "auto", objectFit: "cover" }}
                />
                <img
                  src={LowCholesterol}
                  alt="Low Cholesterol"
                  style={{ width: "9%", height: "auto", objectFit: "cover" }}
                />
                <img
                  src={WeightManagement}
                  alt="Weight Management"
                  style={{ width: "10.5%", height: "auto", objectFit: "cover" }}
                />
                <img
                  src={PureAndNatural}
                  alt="Pure and Nature"
                  style={{ width: "10%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
            
      
         
          </div>
         <div>
          <Container>
            <Row style={{marginTop:"140px"}}>
              <Col sm={12}>
              

                {/*<BrowserSlider/>*/}
              {/*</Col>
            </Row>
          </Container>
</div>
          <div
            style={{
              backgroundColor: "#ffff",
              padding: "20px",
              color: "#002209",
            }}
          >
            <Container style={{ marginTop: "5%" }}>
              <Row>
                <Col sm={6}>
                <img src="/media/wodeyar.webp" alt="wodeyar" style={{width:"100%", height:"450px", objectFit:"cover"}}/>
                </Col>
                <Col sm={6}>
               
                <h1
                style={{
                  textAlign: "center",
                  fontSize: "45px",
                  letterSpacing: "1px",
                  fontWeight: "800",
                  marginBottom: "2%",
                  fontFamily:"montserrat"
                }}
              >
                ABOUT US
              </h1>
              
              <p
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "center",
                  lineHeight: "1.7",
                  fontWeight: "500",
                }}
              >
               "Welcome to The Mysore Oils, where tradition meets quality. Inspired by the visionary leaders of our land, Nalwadi Krishnaraja Wodeyar and Sir M. Visvesvaraya, we're dedicated to bringing you the finest cold-pressed oils.

Our story begins with a passion for preserving the heritage of Mysore and a commitment to promoting healthy living. We believe in the power of traditional methods and high-quality ingredients to create products that nourish both body and soul.

At The Mysore Oils, we're driven by a legacy of excellence and a promise to deliver the purest oils, extracted using time-tested cold-pressing techniques. Our goal is to share the richness of our land's heritage with you, while promoting wellness and sustainability.

Join us in our journey to revive the traditional ways of oil extraction, while embracing modern quality standards. Experience the taste and goodness of Mysore's legacy in every drop of our cold-pressed oils."
              </p>
                </Col>
              </Row>
              
            </Container>

            {/* SHOP NOW*/}

          {/*}  <div
              style={{
                textAlign: "center",
              }}
            >
              <div style={{ paddingTop: "4%" }}>
                <h1
                  style={{
                    fontSize: "45px",
                    letterSpacing: "1px",
                    fontWeight: "800",
                    marginBottom: "3%",
                    fontFamily:"montserrat"
                  }}
                  className="mobile-font"
                >
                  SHOP NOW
                </h1>
                <div style={{marginBottom:"80px"}}>
                  <Products_Sliders />
                </div>
              </div>
            </div>
          </div>

          {/* QUALITY ASSURANCE */}
       {/*}   <Container fluid className=" bgcolor" style={{padding:"20px"}}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "50px",
                letterSpacing: "1px",
                fontWeight: "800",
              }}
            >
              QUALITY ASSURANCE
            </h1>

            <Row className="mt-5 justify-content-center">
              {[
                {
                  img:"/media/organicfarm.mp4",
                  title: "Farm to Table Freshness",
                  desc: "Sourced directly from organic farms, delivering farm-fresh goodness to your kitchens.",
                },
                {
                  img: "/media/filter.mp4",
                  title: "Cold-Pressed Excellence",
                  desc: "Our oils retain all the nutrients, antioxidants, and essential vitamins ensuring the highest health benefits.",
                },
                {
                  img: "/media/purify.mp4",
                  title: "Unfiltered Purity",
                  desc: "Minimal processing to keep the oils as close to nature as possible.",
                },
                {
                  img: "/media/handcraft.mp4",
                  title: "Handcrafted With Care",
                  desc: "Every bottle is handcrafted with love and attention to details for the best quality.",
                },
              ].map((item, i) => (
                <Col
                  key={i}
                  sm={6}
                  md={3}
                  className="mb-5 d-flex justify-content-center"
                >
                  <div
                    style={{
                      textAlign: "center",
                      maxWidth: "200px",
                    }}
                  >
                    <video
  src={item.img}
  autoPlay
  muted
  loop
  playsInline
  style={{
    width: "120px",
    height: "120px",
    objectFit: "cover",
    marginBottom: "15px",
    
  }}
/>
                    <h3
                      style={{
                        letterSpacing: "1px",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "200",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>

          {/* CHOOSE US */}
         {/*} <div
            style={{
              backgroundColor: "#ffff",
              padding: "5% 0",
              color: "#002209",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "45px",
                letterSpacing: "1px",
                fontWeight: "800",
                fontFamily:"montserrat"
              }}
            >
              WHY CHOOSE US?
            </h1>

            <FeatureGrid />
          </div>
          <div
            style={{
              backgroundColor: "#f8f8f8",
              height: "800px",
              padding: "2% 0",
            }}
          >
            <div
              className="text-end "
              style={{ color: "black", padding: "2% 5%" }}
            >
              <h2 style={{ fontSize: "44px", fontWeight: "500" , fontFamily:"montserrat"}}>
                Fuel your favourite dishes to life
              </h2>
              <h2 style={{ fontSize: "44px", fontWeight: "500", fontFamily:"montserrat" }}>
                with{" "}
                <span style={{ fontSize: "60px", fontWeight: "normal"  }} className="madina">
                  "The Mysore Oils"
                </span>
              </h2>
            </div>
            <img
              src={"/media/fuelBanner.png"}
              style={{
                width: "100%",
                paddingInline: "5%",
              }}
            />
          </div>
          {/* REVIEWS */}
         {/*} <Reviews />

          <ScrollToTop />

          {/* FOOTER */}
         {/*}  <Footer /> 
    

    </>
  );
}*/}

import Navbar_Menu from "../components/Navbar_Menu";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  InputGroup,
  Carousel
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import BrowserSlider from "./BrowserSlider";
import Products_Sliders from "./Products_Sliders";
import FeatureGrid from "./FeatureGrid";
import Footer from "../components/Footer";

import MysuruOilsLogo from "/media/MysuruOilsLogo.png";
import purehealthy from "/media/Group333.png";
import naturecontent from "/media/Fromnaturetoyourkitchen.png";
import Qualityassured from "/media/Qualityassured.png";
import Chemicalfree from "/media/Chemicalfree.png";
import plantbased from "/media/plantbased.png";
import LowCholesterol from "/media/LowCholesterol.png";
import WeightManagement from "/media/WeightManagement.png";
import PureAndNatural from "/media/PureAndNatural.png";

export default function Home_Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Anjali",
      review:
        "Their range of dry fruits is premium—especially the almonds and anjeer. The millets have helped my family shift to a healthier diet.",
      rating: 4,
      image: "/media/user1.jpg",
    },
    {
      name: "Suma",
      review:
        "I’m in love with their herbal face oils and handmade soaps. My skin has never felt this soft and radiant.",
      rating: 5,
      image: "/media/user2.jpg",
    },
    {
      name: "Sneha",
      review:
        "I've been using their cold-pressed oils for months now. The purity is unmatched—no residue or smell like store brands.",
      rating: 4,
      image: "/media/user3.jpg",
    },
  ];

  return (
    <>
      <Navbar_Menu />
      <div className="homepage">
        {/* Banner Section */}
        <section className="hero-section" style={{ background: "#fdf6f0" }}>
          <Container className="py-5 text-center">
            <img src={MysuruOilsLogo} alt="Mysore Oils Logo" style={{ width: "220px" }} />
            <h1 className="mt-4 mb-2" style={{ fontFamily: "Playfair Display", fontWeight: 600, fontSize: "36px" }}>
              Pure, Natural & Traditionally Crafted Oils
            </h1>
            <p style={{ fontFamily: "Montserrat", fontSize: "16px", color: "#555" }}>
              Cold-pressed excellence straight from Mysore’s rich heritage
            </p>
            <Button variant="dark" className="mt-3 px-5 py-2" style={{ fontFamily: "Poppins" }}>Explore Now</Button>
          </Container>
        </section>

        {/* Browser Slider */}
        <section>
          <BrowserSlider />
        </section>

        {/* Icons Row */}
        <section className="bg-light py-4">
          <Container>
            <Row className="text-center justify-content-center">
              {[Qualityassured, Chemicalfree, plantbased, LowCholesterol, WeightManagement, PureAndNatural].map((icon, index) => (
                <Col key={index} xs={4} sm={2} className="mb-3">
                  <img src={icon} alt={`icon-${index}`} style={{ width: "60px", height: "auto" }} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* About Section */}
        <section className="py-5 bg-white">
          <Container>
            <Row>
              <Col md={6}>
                <img src="/media/wodeyar.webp" alt="Wodeyar" style={{ width: "100%", borderRadius: "8px" }} />
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h2 className="mb-4" style={{ fontFamily: "Playfair Display", fontWeight: 700 }}>About Us</h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, fontFamily: "Montserrat" }}>
                  Welcome to The Mysore Oils, where tradition meets quality. Inspired by visionary leaders of our land, we are committed to preserving heritage through pure, cold-pressed oils.
                </p>
                <Button variant="outline-dark" className="mt-3" style={{ width: "fit-content" }}>Read More</Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Shop Now Section */}
        <section className="text-center py-5 bg-light">
          <h2 style={{ fontFamily: "Playfair Display", fontSize: "32px", fontWeight: 700 }}>Shop Now</h2>
          <Container className="mt-4">
            <Products_Sliders />
          </Container>
        </section>

        {/* Testimonials Section */}
        <section style={{ backgroundColor: "#FAF8F3", padding: "60px 0" }}>
          <Container>
            <h2 style={{ textAlign: "center", fontFamily: "Playfair Display", fontWeight: 700 }}>
              What Our Customers Say
            </h2>
            <Carousel indicators={true} interval={5000} className="mt-4">
              {testimonials.map((t, index) => (
                <Carousel.Item key={index}>
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{
                      maxWidth: "700px",
                      margin: "40px auto",
                      background: "#fff",
                      padding: "30px",
                      borderRadius: "15px",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-circle mb-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <p style={{ fontSize: "16px", fontFamily: "Montserrat", textAlign: "center" }}>
                      “{t.review}”
                    </p>
                    <h5 style={{ marginTop: "20px", fontWeight: 600 }}>{t.name}</h5>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color={i < t.rating ? "#D3B353" : "#ccc"} />
                      ))}
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </section>

        {/* Quality Assurance */}
        <section className="py-5 bg-white">
          <Container>
            <h2 className="text-center mb-5" style={{ fontFamily: "Playfair Display", fontSize: "32px", fontWeight: 700 }}>Quality Assurance</h2>
            <Row className="justify-content-center">
              {["organicfarm.mp4", "filter.mp4", "purify.mp4", "handcraft.mp4"].map((video, index) => (
                <Col key={index} sm={6} md={3} className="text-center mb-4">
                  <video src={`/media/${video}`} autoPlay muted loop style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                  <h5 className="mt-3" style={{ fontSize: "14px", fontWeight: 600 }}>Feature {index + 1}</h5>
                  <p style={{ fontSize: "12px", color: "#666" }}>Detailed description of quality feature goes here.</p>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5" style={{ fontFamily: "Playfair Display", fontSize: "32px", fontWeight: 700 }}>Why Choose Us?</h2>
            <FeatureGrid />
          </Container>
        </section>

        {/* Tagline Section */}
        <section className="text-center py-5 bg-white">
          <h2 style={{ fontSize: "32px", fontWeight: 500, fontFamily: "Montserrat" }}>
            Fuel your favourite dishes to life with
          </h2>
          <h2 style={{ fontSize: "48px", fontWeight: 700, fontFamily: "Playfair Display", color: "#b38900" }}>
            "The Mysore Oils"
          </h2>
          <img src="/media/fuelBanner.png" alt="Fuel Banner" style={{ width: "100%" }} />
        </section>

        <Footer />
      </div>
    </>
  );
}


