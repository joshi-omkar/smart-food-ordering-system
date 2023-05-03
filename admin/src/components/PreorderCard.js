import React from 'react'
import '../Styles/PreorderCard.css'

const Item = ({dishName, count}) => {
    return (
      <div className="pre-item-container">
        <span className="pre-order">{dishName}</span>
        <span className="pre-qty">{count}</span>
      </div>
    );
  };

const PreorderCard = ({prebookOrder, userData}) => {
  console.log(prebookOrder)
  return (
    <div className="pre-order-container">
      <div className="pre-user">
        
        <div className="pre-user-info">
          <span className="pre-user-name">{prebookOrder[0].userName}</span>
          <span className="pre-user-no">{prebookOrder[0].mobileNo}</span>
        </div>
        <div className="pre-head-count">4 People</div>
      </div>
      <div className="pre-divider"></div>
      <div className="pre-list">
        <div className="pre-header">
          <span className="pre-order">Order</span>
          <span className="pre-qty">Qty</span>
        </div>
        {prebookOrder.map((prebook, key)=>{
          return(<>
          <Item dishName={prebook.dishName} count={prebook.count} />
          </>)
        })}
      </div>
      <div className="pre-divider"></div>
      <div className="pre-btn-container">
        <button className='pre-sendToKitchen'>Send to kitchen</button>
      </div>
    </div>
  )
}

export default PreorderCard