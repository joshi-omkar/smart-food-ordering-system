import React, { Component, useState } from "react";
import QrReader from "modern-react-qr-reader";
import { useNavigate } from "react-router-dom";

// class QrReaderComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       result: "No result",
//     };

//     this.handleError = this.handleError.bind(this);
//     this.handleScan = this.handleScan.bind(this);
//   }

//   navigate = useNavigate();

//   handleScan = (data) => {
//     if (data) {
//       this.state.result = data;
//       console.log(this.state.result);
//       this.setState({ result: data });
//     }
//   };

//   handleError = (err) => {
//     console.error(err);
//   };

//   render() {
//     return (
//       <div>
//         <QrReader
//           delay={300}
//           facingMode={"environment"}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           style={{ width: "100%" }}
//         />
//         {this.state.result === "preorder"
//           ? this.navigate("watingOderUserInfo")
//           : this.navigate("menu")}
//       </div>
//     );
//   }
// }

const QrReaderComponent = () => {

  const [result, setResult] = useState('No result')

  const navigate = useNavigate()

  const handleScan = (data) =>{
    if(data){
      // result = data
      setResult(data)
    }
  }

  const handleError = (err) =>{
    console.error(err);
  }

  return (
    <div>
      <QrReader
        delay={300}
        facingMode={"environment"}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {result === "prebook"
        ? navigate("/watingOderUserInfo")
        : navigate("/menu")}

        {/* <p>{result}</p> */}
    </div>
  );
};

export default QrReaderComponent;
