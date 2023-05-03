import React from 'react'
import '../../Styles/confirmed.css'
import "../../Assets/tick.json";
import Lottie from "react-lottie";
import animationData from "../../Assets/tick.json";
export const Confirmed = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section class="Confirmed-contain">
      <div className="Confirmed-loti">
        <Lottie options={defaultOptions} height={350} width={350} />
        <div className="Confirmed-fon">Order Send Successfully</div>
      </div>
    </section>
  );
};