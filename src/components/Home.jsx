import styles from "../style";
import Billing from "./Billing";
import Business from "./Business";
import CardDeal from "./CardDeal";
import Clients from "./Clients";
import CTA from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import Cards from "./Cards";
import Slider from "./Slider";



const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        {/* <AboutUs/> */}
        <Slider/>
        <Business />
  
        <Cards/>
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
