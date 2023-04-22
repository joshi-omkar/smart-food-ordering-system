import React, {useState} from 'react'
import '../../Styles/Menu.css'
import Rating from '../../Assets/Rating'
import ButtonForAllPurpose from '../ButtonForAllPurpose'

const Item = () => {
    const [num, setNum] = useState(0);
  
    const addItem = () => {
      setNum(num + 1);
    };
    const removeItem = () => {
      setNum(num - 1);
    };
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
          <Rating/>
          <div className="rate-count">1,536 Ratings</div>
        </div>
        <div
          className={` duration-500 h-8 py-3 ${
            num === 0 ? null : "pad-trans"
          } order-count-conatiner`}
        >
          {num === 0 ? null : (
            <>
              <span className="" onClick={removeItem}>
                &#8722;
              </span>
              <span className="">{num}</span>
            </>
          )}
          <span className="" onClick={addItem}>
            &#43;
          </span>
        </div>
      </div>
    );
  };

  const Category = ({ children }) => {
    return <div className="category">{children}</div>;
  };

const Menu = () => {
  return (
    <div>
<div className="title">Hey Foodies ! Welcome to our Restaurant.</div>
      <div className="input-conatiner">
        <input
          type="text"
          placeholder="Find for some dilicious food.."
          className="text-input"
        />
        <div className="input-btn"></div>
      </div>
      <div className=" category-container">
        <Category>Soup</Category>
        <Category>Grills</Category>
        <Category>Bread</Category>
        <Category>Rice</Category>
      </div>
      <h3 className="popular">Our popular</h3>
      <div className='item-containers'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
      <div className='button-cover-menu'>
      <ButtonForAllPurpose text={"Send To Kitchen"} marginTop='0px' width={'100%'} />
      </div>
    </div>
  )
}

export default Menu