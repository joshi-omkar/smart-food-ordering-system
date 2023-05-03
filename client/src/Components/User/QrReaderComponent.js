import React, { Component, useState } from "react";
import QrReader from "modern-react-qr-reader";
import { useNavigate } from "react-router-dom";

const QrReaderComponent = () => {
  const [result, setResult] = useState("No result");

  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      // result = data
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div style={
      {
        position: 'relative',
        top: '150px',
      }
    }>
      <QrReader
        delay={300}
        facingMode={"environment"}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {result === "prebook"
        ? navigate(`/watingOderUserInfo/${result}`)
        : navigate(`/menu/${result}`)}

      {/* <p>{result}</p> */}
    </div>
  );
};

export default QrReaderComponent;
