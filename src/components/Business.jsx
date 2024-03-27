import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button1";
import send from "../assets/Shield.png"

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-orange`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Services 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our dedicated team of experts is enthusiastic about con- ceptualizing. coordinating, and delivering a wide range of indoor and outdoor events, spanning from concerts, fashion shows, and sports activities to poetry programs, campaigns, and more. As a socially conscious company, we have gained a reputation for organizing impactful social events that aim to bring positive change and benefit communities
      </p>
    
      {/* <h4 className={styles.heading3} >
      <img src={send}/>
      Events
      </h4>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our passionate team excels in initiating, planning, and executing indoor and outdoor events of all sizes. From concerts and fashion shows to sporting activities and poetry programs, we craft memorable experiences. As a socially responsible firm, we also organize events that benefit communities.
      </p> */}

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  
);

export default Business;
