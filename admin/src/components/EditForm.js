import React, { useState } from 'react'
import axios from 'axios'
import UploadImage from "./UploadImage";

function RadioToggleButton({ options, selectedOption, setSelectedOption }) {
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name="option"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }

const EditForm = ({
    clickedOnAddItem,
    handleOnClickAddItem,
    currentCategory,
  }) => {
    const options = [
      { label: "Veg", value: "Veg" },
      { label: "Non Veg", value: "NonVeg" },
    ];
  
    const [dishName, setDishName] = useState("");
    const [dishPrice, setDishPrice] = useState("");
    const [dishDescription, setDishDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState(options[0].value);
  
    const formData = async () => {
      const itemDetails = {
        dishName,
        dishPrice,
        dishDescription,
        imageUrl,
        selectedOption,
        currentCategory,
      };
  
      await axios
        .post("http://localhost:3001/addItem", itemDetails)
        .then((res) => {
          if (res.data.message) {
            console.log(res.data.message);
          } else {
            console.log(res);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      formData();
      setDishName("");
      setDishPrice("");
      setDishDescription("");
      setImageUrl("");
    };
  
    return (
      <div className={`edit-form-overlay ${clickedOnAddItem ? "show" : ""}`}>
        <div className={`edit-form ${clickedOnAddItem ? "show" : ""}`}>
          <button onClick={handleOnClickAddItem}>
            <p>X</p>
          </button>
          <h2>Add Item</h2>
  
          <form className="add-item-form" onSubmit={onSubmit}>
            <RadioToggleButton
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <div className="add-item-form-container">
              <div>
                <p>Dish Name</p>
                <input
                  type="text"
                  placeholder="Enter the dish name here"
                  onChange={(e) => {
                    setDishName(e.target.value);
                  }}
                  value={dishName}
                />
              </div>
              <div>
                <p>Dish Price</p>
                <input
                  type="text"
                  placeholder="Enter the dish price here "
                  onChange={(e) => {
                    setDishPrice(e.target.value);
                  }}
                  value={dishPrice}
                />
              </div>
              <div>
                <p>Dish Description</p>
                <input
                  type="textarea"
                  placeholder="Enter the dish description here in 50 to 150 words "
                  onChange={(e) => {
                    setDishDescription(e.target.value);
                  }}
                  value={dishDescription}
                />
              </div>
              <div>
                <p>Upload Dish Image</p>
                <UploadImage setImageUrl={setImageUrl} />
              </div>
            </div>
            <button className="add-item-button">Add Item</button>
          </form>
        </div>
      </div>
    );
  };

export default EditForm