import Navbar from "./Navbar";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (


    <section className="heroSection" id="heroSection">
    <div className="heroBackground">
      <div className="navbar">
        <Navbar />
      </div>
      <div className='hero-container'>
        <img className="bg-img" src="./hero4.png" alt="Hero Background" />
        <img className="logoImage" src="cc.png" alt="" />
        <div className="text-container">
          <h1> CUISINE CRAFT  </h1>
          <p><b>Welcome to CuisineCraft, where culinary magic happens. </b> <br/>
              Indulge in a delightful dining experience with our exquisite dishes crafted <br /> with
            passion and expertise. Explore our menu and reserve your table today!</p>
        </div>
        <div className="hero-btns">
              <Link className="MenuBtn" to="menu" smooth={true} duration={500} >
                See Menu
              </Link>
              <Link className="ReservationBtn" to="reservation" smooth={true} duration={500} >
                Reservation
              </Link>
            </div>
      </div>
    </div>
  </section>

  );
};

export default HeroSection;
