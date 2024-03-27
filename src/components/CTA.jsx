import styles from "../style";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-grow flex flex-col">
      <h2 className={styles.heading2}>Contact Us Now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get in touch with us for inquiries or collaborations.
      </p>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <FontAwesomeIcon icon={faEnvelope} className="icon text-white" />
        <span className="icon-text"> {/* Wrap the text and icon in a span */}
          <a href="mailto:info@alelamultimedia.com" className="info-link">info@alelamultimedia.com</a>
        </span>
      </div>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <FontAwesomeIcon icon={faGlobe} className="icon text-white" />
        <span className="icon-text"> {/* Wrap the text and icon in a span */}
          <a href="www.alelamultimedia.com" className="info-link" >www.alelamultimedia.com</a>
        </span>
      </div>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <FontAwesomeIcon icon={faPhone} className="icon text-white" />
        <span className="icon-text"> {/* Wrap the text and icon in a span */}
          <a href="tel:+251975108685" className="info-link">+251 975 108685</a>
        </span>
      </div>
    </div>

    <div  className={`${styles.flexCenter} sm:ml-2 ml-0 sm:mt-0 mt-2`}>
      <Button />
    </div>
  </section>
);

export default CTA;
