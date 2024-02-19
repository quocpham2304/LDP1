import Billing from "./Components/Billing";
import Business from "./Components/Business";
import CTA from "./Components/CTA";
import CardDeal from "./Components/CardDeal";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Starts from "./Components/Starts";
import Testimonials from "./Components/Testimonials";
import styles from "./styles";

export default function Home() {
  return (
    <div className="bg-primary bg-black w-ful overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} fixed top-0 z-50 `}>
          <NavBar/>
          </div>
      </div>
      <div className={`bg-primary bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
          </div>
      </div>
      <div
        className={`bg-primary bg-black ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Starts/>
          <Business/>
          <Billing/>
          <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
        </div>
      </div>
    </div>
  );
}
