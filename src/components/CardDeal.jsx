import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Team <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our team consists of highly talented and experienced professionals in diverse creative fields, such as photography, videography, graphic design, and more
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
