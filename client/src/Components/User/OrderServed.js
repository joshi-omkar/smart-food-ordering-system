import React, { useState, useEffect } from "react";
import "../../Styles/orderServed.css";
import Lottie from "react-lottie";
import animationData from "../../Assets/tick.json";
import { useParams, useNavigate } from "react-router-dom";
export const OrderServed = () => {
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

//   useEffect(()=>{
//     if (progress === 100) {
//         navigate(`/menu/${tableId}`);
//       }
//   }, [progress])

  const handleGenerateBill = () => {

    navigate(`/bill/${tableId}`);

  }

  return (
    <section class="OrderServed-contain">
      <div className="OrderServed-loti">
        <Lottie options={defaultOptions} height={200} width={200} />
        <div className="OrderServed-fon">Order Served</div>
        <div className="OrderServed-btn-container">
          <div className="OrderServed-hed">Would you like to do..</div>
          <button onClick={handleOnOrderAgain} className="OrderServed-btn">
            Order Again
          </button>
          <button onClick={handleGenerateBill} className="OrderServed-btn">
          Generate Bill
          </button>
        </div>
      </div>
    </section>
  );
};
