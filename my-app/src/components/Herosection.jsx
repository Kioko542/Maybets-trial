import React from 'react';

const HeroSection = () => {
  const imageUrl = "https://img.freepik.com/free-psd/realistic-football-banner-template-design_23-2149353642.jpg?t=st=1737837316~exp=1737840916~hmac=a964b37c4f024215468ad5afbc39df22a512f1634daf67143862268d3d90d1c5&w=1380"; // Direct image URL
  
  return (
    <section className="relative w-full h-[30vh] md:h-[70vh]">
      <img
        src={imageUrl} // Direct image URL used here
        alt="Sports Hero"
        className="object-cover w-full h-full"
      />
    </section>
  );
};

export default HeroSection;
