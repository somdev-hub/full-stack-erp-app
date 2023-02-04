import React from "react";
import "./Cafeteria.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MenuItem from "../../components/MenuItem/MenuItem";
import CafeteriaTable from "../../components/CafeteriaTable/CafeteriaTable";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cart, menuItems } from "../../files/cart";

const Cafeteria = () => {
  const [cartClicked, setCartClicked] = React.useState(false);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="cafeteria-container">
          <h3 className="your-profile">Cafeteria</h3>
          <div className="cafeteria-main">
            <div className="your-order">
              <div className="order-head">
                <h3>Your current orders</h3>
                <p>2 omelletes, 1 dose...</p>
              </div>
              <div className="waiting-time">
                <h3>00 : 30 : 00</h3>
              </div>
            </div>
            <div className="cafeteria-menu">
              <h3>Today's menu</h3>
              <div className="cafeteria-menu-items">
                {menuItems.map((item) => {
                  return (
                    <MenuItem
                      image={item.image}
                      item={item.item}
                      price={item.price}
                      key={item.id}
                    />
                  );
                })}
              </div>
            </div>
            <div className="item-table">
              <CafeteriaTable />
            </div>
            <div className="cart">
              <div
                className="cart-content"
                style={cartClicked ? { display: "block" } : { display: "none" }}
              >
                <div className="cart-head">
                  <h3>Your Cart</h3>
                  <hr />
                </div>
                <div className="cart-items">
                  {cart.map((item) => {
                    return (
                      <div className="cart-item" key={item.id}>
                        <img src={item.item_image} alt="" />
                        <div className="item-content">
                          <h5>{item.item_name}</h5>
                          <div className="item-para">
                            <p>{`Price : Rs. ${item.item_price}/-`}</p>
                            <p>{`Quantity : ${item.item_quantity}`}</p>
                          </div>
                        </div>
                        <div className="item-price">
                          <h3>{`Rs. ${
                            item.item_price * item.item_quantity
                          }/-`}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <hr style={{ marginTop: "15%", width: "90%" }} />
                <div className="cart-bottom-text">
                  <h3>Total order</h3>
                  <p>{`Rs. ${cart.reduce((x, y) => {
                    return x + y.item_price * y.item_quantity;
                  }, 0)}/-`}</p>
                </div>
                <div className="cart-buttons">
                  <button className="cancel-button">Cancel</button>
                  <button className="order-button">Order</button>
                </div>
              </div>
              <div
                className="cart-button"
                onClick={() => {
                  setCartClicked(!cartClicked);
                }}
              >
                <ShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;
