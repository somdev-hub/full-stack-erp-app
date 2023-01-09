import React from "react";
import "./Cafeteria.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MenuItem from "../../components/MenuItem/MenuItem";
import CafeteriaTable from "../../components/CafeteriaTable/CafeteriaTable";

const Cafeteria = () => {
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
                <MenuItem
                  image="https://recipes.net/wp-content/uploads/2021/10/masala-dosa-recipe-1024x576.jpg"
                  item="Dosa"
                  price="30.00"
                />
                <MenuItem
                  image="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&quality=65&strip=all&ssl=1"
                  item="Samosa"
                  price="20.00"
                />
                <MenuItem
                  image="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/veg-chowmein-min-scaled.jpg?v=1620296035"
                  item="Chowmein Veg"
                  price="30.00"
                />
                <MenuItem
                  image="https://i.ytimg.com/vi/7wIMaLJvL0U/maxresdefault.jpg"
                  item="Chowmein Non-Veg"
                  price="30.00"
                />
                <MenuItem
                  image="https://www.simplyrecipes.com/thmb/LLhiA8KZ7JZ5ZI0g-1bF1eg-gGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg"
                  item="Omellete"
                  price="20.00"
                />
                <MenuItem
                  image="https://www.kannammacooks.com/wp-content/uploads/masala-poori-homemade-chaat-street-side-recipe-5.jpg"
                  item="Chaat masala"
                  price="30.00"
                />
              </div>
            </div>
            <div className="item-table">
              <CafeteriaTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;
