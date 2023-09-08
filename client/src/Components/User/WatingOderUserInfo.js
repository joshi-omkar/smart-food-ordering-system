import React, { useState } from "react";
import IconBig from "../../Assets/IconBig";
import "../../Styles/WatingOderUserInfo.css";
import ButtonForAllPurpose from "../ButtonForAllPurpose";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import IconImg from "../../Assets/Icon.png";
import { SERVER_URL } from "../../Utils/Constants";

const WatingOderUserInfo = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [alredayExist, setAlreadyExist] = useState(false);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const { tableId } = useParams();

  const UserInfo = async (e) => {
    e.preventDefault();

    if (mobileNo.length !== 10 || name.length < 1) {
      setError("Please Check Mobile Number and Name!");
    } else {
      const user = { name, mobileNo };

      await axios
        .post(`${SERVER_URL}/customer_details`, user)
        .then((res) => {
          navigate(`/menu/${tableId}`);
          console.log(res.data);
          // setIsLogedIn(true);
          localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((error) => {
          setError("Please Try Again");
        });
    }
  };

  return (
    <div className="WatingOderUserInfo">
      <img src={IconImg} alt="icon" />
      <form className="RegisterForm">
        <h3>Pre-Book Order</h3>
        <div>
          <p>Name</p>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="eg. Rakesh Zunzunwala"
            required={true}
          />
          <p>Contact Details</p>
          <input
            type="text"
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
            value={mobileNo}
            placeholder="eg. 9182736455"
            required={true}
          />
        </div>
        {error !== "" ? (
          <div className="error-handler">
            <p>{error}</p>
          </div>
        ) : (
          <></>
        )}
        <ButtonForAllPurpose
          onclick={UserInfo}
          text={"Proceed"}
          marginTop={"30px"}
          width={"125px"}
        />
      </form>
    </div>
  );
};

export default WatingOderUserInfo;
