import React, { useState } from "react";
import IconBig from "../../Assets/IconBig";
import "../../Styles/WatingOderUserInfo.css";
import ButtonForAllPurpose from "../ButtonForAllPurpose";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import IconImg from '../../Assets/Icon.png'

const WatingOderUserInfo = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const {tableId} = useParams()


  const UserInfo = async (e) => {
    e.preventDefault();

    const user = {name, mobileNo}
    console.log(user)
    
    await axios
      .post('http://localhost:3001/customer_details', user)
      .then((res) => {
        if(res.data.message){
            setError(res.data.message);
        }else{
            navigate(`/menu/${tableId}`);
            console.log(res.data)
            // setIsLogedIn(true);
            localStorage.setItem("user", JSON.stringify(user))
        }
      })
      .catch((error) => {

        if(error.response){
          setError("User Not Found")
        }
      });
    
  };

  return (
    <div className="WatingOderUserInfo">
      {/* <IconBig /> */}
      <img src={IconImg} alt='icon'/>
      <div className="RegisterForm">
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
          />
          <p>Contact Details</p>
          <input
          type="text"
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
            value={mobileNo}
            placeholder="eg. 9669966996"
          />
        </div>
        {
          error !== "" ? (
            <div>
              <p>{error}</p>
            </div>
          ):(
            <></>
          )
        }
        <ButtonForAllPurpose
          onclick={UserInfo}
          text={"Proceed"}
          marginTop={"30px"}
          width={"125px"}
        />
      </div>
    </div>
  );
};

export default WatingOderUserInfo;
