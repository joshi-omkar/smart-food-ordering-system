import { useState } from "react";
// import UploadImageButton from "./UploadImageButton";
import axios from "axios";
import UploadImage from "./UploadImage";

// export const ItemCard = () => {
//   const [disbled, setDisabled] = useState(false);
//   return (
//     <div className="shadow-container">
//       <div className="menu-item-card ">
//         <div className="menu-item-img">
//           <img src={`https://imgtr.ee/images/2023/04/19/0v1Ul.png`} alt="img" />
//         </div>
//         <div className="menu-bestselller">bestselller</div>
//         <div className="menu-conatiner">
//           <div className="menu-item-name">Bombay Style Pav Bhaji</div>
//           <div className="menu-price">Rs. 100</div>
//         </div>
//         <div className="menu-discription">
//           (Simmered in butter and aromatic spices, Butter Pav [2 Pieces] )
//         </div>
//         <div className="menu-stars">(4.5)</div>
//         <div className="menu-rating">1,536 Rating</div>
//       </div>
//       {disbled && <div className="menu-shadow"></div>}
//     </div>
//   );
// };

const ItemCard = () => {
  return (
    <div className="item-container">
      <img
      className='item-img'
      src="https://imgtr.ee/images/2023/04/19/0v1Ul.png"
      alt="Matar"
      border="0"
    />
      <div className="divider"></div>
      <div className="info-container">
        <div className="bestseller">bestseller</div>
        <div className="label">Bombay Style Pav Bhaji</div>
        <div className="price">Rs. 100</div>
        <div className="item-description">
          (Simmered in butter and aromatic spices, Butter Pav [2 Pieces] )
        </div>
        {/* <Rating/> */}
        <div className="rate-count">1,536 Ratings</div>
      </div>
    </div>
  );
};

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

const EditForm = ({ clickedOnAddItem, handleOnClickAddItem, currentCategory }) => {
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
    const itemDetails = { dishName, dishPrice, dishDescription, imageUrl, selectedOption, currentCategory };

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
      setDishName("")
      setDishPrice("")
      setDishDescription("")
      setImageUrl("")
      setSelectedOption("")
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    formData();
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
              />
            </div>
            <div>
              <p>Upload Dish Image</p>
              {/* <button className="upload-button-style">Upload</button> */}

              {/* <UploadImageButton setImage={setImage} buttonName={"Upload"} /> */}
              <UploadImage setImageUrl={setImageUrl} />
            </div>
          </div>
          <button className="add-item-button">Add Item</button>
        </form>
      </div>
    </div>
  );
};

const MenuItemContainer = ({currentCategory}) => {
  const [clickedOnEdit, setClickedOnEdit] = useState(false);
  const [clickedOnAddItem, setClickedOnAddItem] = useState(false);

  const handleOnClickEdit = (e) => {
    e.preventDefault();
    setClickedOnEdit(!clickedOnEdit);
  };

  const handleOnClickCancleEdit = (e) => {
    e.preventDefault();
    setClickedOnEdit(!clickedOnEdit);
  };

  const handleOnClickAddItem = (e) => {
    e.preventDefault();
    setClickedOnAddItem(!clickedOnAddItem);
  };

  return (
    <div className="MenuItemContainer">
      <div className="title-button-container">
        <h3>Control Your Restaurant's Menu</h3>
        {clickedOnEdit ? (
          <div className="edit-button-container">
            <button onClick={handleOnClickAddItem}>
              <p>Add Items</p>
            </button>
            <button>
              <p>Save Changes</p>
            </button>
            <button onClick={handleOnClickCancleEdit}>
              <p>X</p>
            </button>
          </div>
        ) : (
          <button onClick={handleOnClickEdit}>
            <p>Edit</p>
          </button>
        )}
      </div>
      <div className="MenuItemContainerMain">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <EditForm
        clickedOnAddItem={clickedOnAddItem}
        handleOnClickAddItem={handleOnClickAddItem}
        currentCategory={currentCategory}
      />
    </div>
  );
};

export default MenuItemContainer;
