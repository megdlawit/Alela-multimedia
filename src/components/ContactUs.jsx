import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   
    faPhone,
    faGlobe,
    faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FaThumbsUp, FaPhoneSquareAlt } from "react-icons/fa";

const ContactUs = () => {
    const rectangles = [
        {
            icon: faThumbsUp,
            label: "100% Satisfaction Guaranteed",
            label2: "High quality, Accessibility, Africanism, Convenience and Consistency",
        },
        {
            icon: faPhone,
            label: "Contact Us",
            label2: "+2519087654/+2519876543",
        },
        {
            icon: faGlobe,
            label: "Social media",
            label2: "Email: info@Kibirtgmail ",
            label3: "Instagram: kibirt",
           
        },
    ];

    return (
        <div className="textAdvertismentContainer">
            {rectangles.map((item, index) => (
                <div key={index} className="textAdvertismentRectangle">
                    <div className="textAdvertismentContent">
                        <div className="textAdvertismentIcon">
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="catIcon"
                            />
                        </div>
                        <div className="textAdvertismentLabel">
                            <h2>{item.label}</h2>
                            <h5>{item.label2}</h5>
                            <h5>{item.label3}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactUs;