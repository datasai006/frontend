// import React from "react";
// import "../home/banner.css";
// import CarVideo from "../../assets/videos/car3.mp4";
// const banner = () => {
//   return (
//     <div className="banner-container m-2">
//       <video autoPlay muted loop className="background-video">
//         <source src={CarVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="content mt-5">
//         <h1 className="text-white ">
//           Welcome to the <span className=" textc">RSNCARS</span>
//         </h1>
//         <p className="text-white h2 ">Buy a Car at the Best Price</p>
//       </div>
//     </div>
//   );
// };

// export default banner;

import React, { useState, useEffect } from "react";
import "../home/banner.css";
import CarVideo from "../../assets/videos/car3.mp4";
import styled, { keyframes } from "styled-components";
import NAV from "../header/nav";


const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledLetter = styled.span`
  opacity: 0;
  animation: ${fadeIn} 0.1s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

const Banner = () => {
  const sentence = "Buy a Car With Best Price";
  const [visibleLetters, setVisibleLetters] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < sentence.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [sentence]);

  return (
    <>
      <NAV />
      <div className="banner-container m-2">
        <video autoPlay muted loop className="background-video">
          <source src={CarVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content mt-5 text-center">
          <h1 className="text-white">
            Welcome to the <span className="textc">RSNCARS</span>
          </h1>
          <p className="text-white h2">
            {sentence.split("").map((letter, index) => (
              <StyledLetter
                key={index}
                delay={index * 0.1}
                style={{ opacity: index < visibleLetters ? 1 : 0 }}
              >
                {letter}
              </StyledLetter>
            ))}
          </p>
        </div>
      </div>
    
    </>
  );
};

export default Banner;
