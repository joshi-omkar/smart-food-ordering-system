import React, { useState } from "react";
import {QrReader} from "react-qr-reader";

const QrReaderComponent = () => {
  const [data, setData] = useState();

  const handleScan = (qrData) => {
    if (qrData) {
        setData(qrData);
      }
  }


  const previewStyle = {
    height: 100,
    width: 100,
    margin: "auto"
  }
  const handleError = (err) =>{
    console.error(err)
  }

  return (
    <div>
      <QrReader
        delay={'300'}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />

      <div>{data}</div>
    </div>
  );
};

export default QrReaderComponent;
