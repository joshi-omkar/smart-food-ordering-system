import "../Styles/order-history.css";

const Order = () => {
    return (
      <div>
        <div className="orderhistory-headers">
          <div className="orderhistory-index orderhistory-section-side">1</div>
          <div className="orderhistory-section orderhistory-section-side">27/08/22</div>
          <div className="orderhistory-section orderhistory-section-side">120</div>
          <div className="orderhistory-section orderhistory-section-side">720</div>
          <div className="orderhistory-section orderhistory-section-side">UPI</div>
          <div className="orderhistory-section ">View Bill</div>
        </div>
        <div className="orderhistory-line"></div>
      </div>
    );
  };

export const OrderHistory = () => {
  return (
    <section className="order-history-conatiner">
        <div>
        <div className="orderhistory-table-container">
          <section className="orderhistory-table">
            <div className="orderhistory-headers">
              <div className="orderhistory-index orderhistory-section-side">No.</div>
              <div className="orderhistory-section orderhistory-section-side">Date</div>
              <div className="orderhistory-section orderhistory-section-side">Order No.</div>
              <div className="orderhistory-section orderhistory-section-side">Amount</div>
              <div className="orderhistory-section orderhistory-section-side">Payment method</div>
              <div className="orderhistory-section ">View Bill</div>
            </div>
            <div className="orderhistory-line"></div>
            <Order />
            <Order />
            <Order />
            <Order />
          </section>
        </div>
      </div>
    </section>
  );
};
