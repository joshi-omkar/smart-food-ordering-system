import React, { useState, useEffect } from "react";
import "../../Styles/cooking.css";
import Lottie from "react-lottie";
import animationData from "../../Assets/cookingt.json";
import { useParams, useNavigate } from "react-router-dom";
export const Cooking = () => {
  const { tableId } = useParams();
  const navigate  = useNavigate();
  const [progress, setProgress] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleOnOrderAgain = () => {
    navigate(`/menu/${tableId}`);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(()=>{
    if (progress === 100) {
        navigate(`/orderServed/${tableId}`);
      }
  }, [progress])

  return (
    <section class="Cooking-contain">
      <div className="Cooking-loti">
        <Lottie options={defaultOptions} height={200} width={200} />
        <div className="progress-bar">
          <div
            className="progress-bar__fill"
            style={{ width: `${progress}%`, backgroundColor: "#24FF00" }}
          ></div>
        </div>
        <div className="Cooking-fon">Your Order is Preparing</div>
        <div className="Cooking-btn-container">
          <div className="Cooking-hed">Would you like to do..</div>
          <button onClick={handleOnOrderAgain} className="Cooking-btn">
            Order Again
          </button>
        </div>
      </div>
    </section>
  );
};
