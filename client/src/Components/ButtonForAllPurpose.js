import React from 'react'
const ButtonForAllPurpose = ({ text, marginTop, width, onclick }) => {
    return (
      <button onClick={onclick} style={{marginTop: marginTop, width: width}} className="ButtonForAllPurpose">
        <h3>{text}</h3>
      </button>
    );
  };

  export default ButtonForAllPurpose