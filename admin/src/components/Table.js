import React from 'react'
import '../Styles/Table.css'

const Item = () => {
    return (
      <div className="item">
        <div className="conatiner-2">
          <span className="item-name">Jerra Rice</span>
          <span className="price">&#x20b9; 180</span>
        </div>
        <div className="quantity">Qty 2</div>
      </div>
    );
  };

const Table = () => {
  return (
    <div className="table">
      <div className="inner-container">
        <div>
          <div className="conatiner-1">
            <span className="table-no">Table No : 12</span>
            <span className="expand"></span>
          </div>
          <div className="order-no">Order #251</div>
        </div>
        <div className="orders">
          <Item />
          <Item />
          <Item />
        </div>
        <div className="divider"></div>
        <div className="total-conatiner">
          <span className="total">&#x20b9; 480</span>
          <button className='generate-bill'>Generate bill</button>
        </div>
      </div>
    </div>
  )
}

export default Table