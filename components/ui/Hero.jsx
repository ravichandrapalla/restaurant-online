import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <article className="bg-[#FFF8EE]">
      <div>
        <p>Best In Town</p>
        <p>ENJOY OUR CHICKEN BURGEN FAST FOOD</p>
      </div>
      <div>
        <Image src="/Chicken.svg" height={400} width={400} alt="hero" />
      </div>
    </article>
  );
};

export default Hero;
