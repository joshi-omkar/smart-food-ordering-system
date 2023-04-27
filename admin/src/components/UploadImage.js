import React, { useState } from "react";
import axios from "axios";

const UploadImageButton = ({ setImage, buttonName }) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };
  return (
    <div className="upload-image-button">
      <button id="submit-btn" className="btn btn-primary" onClick={handleClick}>
        {buttonName}
      </button>
      <input
        type={"file"}
        accept={["image/png", "image/jpeg", "image/jpg"]}
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        ref={hiddenFileInput}
        className="input-file"
        style={{ display: "none" }}
      />
    </div>
  );
};

const UploadImage = ({setImageUrl}) => {
  const [image, setImage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/file/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
      setImageUrl(response.data);
    } catch (error) {
      console.log(error);
    }
    setImage(null);
  };

  const onClickRemoveImage = () => {
    setImage(null);
  };

  return (
    <div>
      {image ? (
        <div>
          <div className="buttons-after-upload-image-model">
            <button
              id="submit-btn"
              className="btn btn-primary"
              type={"submit"}
              onClick={onSubmit}
            >
              Upload
            </button>
            <UploadImageButton
              setImage={setImage}
              buttonName={"Choose another"}
            />
            <button
              id="submit-btn"
              className="btn btn-primary"
              onClick={onClickRemoveImage}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div>
          <UploadImageButton setImage={setImage} buttonName={"Upload Image"} />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
