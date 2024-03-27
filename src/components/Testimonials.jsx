// import { feedback } from "../constants";
// import styles from "../style";
// import FeedbackCard from "./FeedbackCard";

// const Testimonials = () => (
//   <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
//     <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

//     <div className=" justify-center ">
//   <h2 className={styles.heading2}>
//     What People are saying about us...
//   </h2>
// </div>


//     <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
//       {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
//     </div>
//   </section>
// );

// export default Testimonials;
import React, { useState } from 'react'; // Import useState
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  // State to control visibility of full content
  const [showFullContent, setShowFullContent] = useState({});

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

<div className=" justify-center ">
  <h2 className={styles.heading2}>
    What People are saying about us...
  </h2>
</div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard
            key={card.id}
            {...card}
            showFullContent={showFullContent[card.id]}
            setShowFullContent={() => setShowFullContent((prevState) => ({ ...prevState, [card.id]: !prevState[card.id] }))}
          />
        ))}
      </div>
      
    </section>
  );
};

export default Testimonials;
