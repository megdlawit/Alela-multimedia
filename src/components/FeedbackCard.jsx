// import { quotes } from "../assets";

// const FeedbackCard = ({ content, name, title, img }) => (
//   <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
//     <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
//     <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
//       {content}
//     </p>

//     <div className="flex flex-row">
//       <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
//       <div className="flex flex-col ml-4">
//         <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
//           {name}
//         </h4>
//         <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
//           {title}
//         </p>
//       </div>
//     </div>
//   </div>
// );


// export default FeedbackCard;
import React from 'react';
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img, showFullContent, setShowFullContent }) => {
  const truncatedContent = content.length > 150 ? content.substring(0, 147) + '...' : content;

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
      <p className={`font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10`}>
        {showFullContent ? content : truncatedContent}
        {content.length > 150 && (
          <button
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white mt-4"
            onClick={setShowFullContent}
          >
            {showFullContent ? 'Show Less' : 'See More'}
          </button>
        )}
      </p>
      
     <div className="flex flex-row">
       {/* <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" /> */}
       <div className="flex flex-col ml-4">
         <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
           {name}
         </h4>
         <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
           {title}
        </p>
      </div>
    </div>
    </div>
  );
};

export default FeedbackCard;

