import React from 'react'
import '../Styles/PreorderCard.css'

const Item = () => {
    return (
      <div className="pre-item-container">
        <span className="pre-order">Munchow Soup</span>
        <span className="pre-qty">2</span>
      </div>
    );
  };

const PreorderCard = () => {
  return (
    <div className="pre-order-container">
      <div className="pre-user">
        <div className="pre-user-info">
          <span className="pre-user-name">Jhon Doe</span>
          <span className="pre-user-no">7788947893</span>
        </div>
        <div className="pre-head-count">4 People</div>
      </div>
      <div className="pre-divider"></div>
      <div className="pre-list">
        <div className="pre-header">
          <span className="pre-order">Order</span>
          <span className="pre-qty">Qty</span>
        </div>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className="pre-divider"></div>
      <div className="pre-btn-container">
        <button className='pre-sendToKitchen'>Send to kitchen</button>
      </div>
    </div>
  )
}

export default PreorderCard