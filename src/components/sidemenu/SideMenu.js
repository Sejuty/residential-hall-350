import React from "react";
import style from "./sidemenu.module.css";
import { Link, useNavigate } from "react-router-dom";
const SideMenu = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.sidebar}>
          <ul>
            <li>
              <Link to="/resident"><span className={style.item}>Residents</span></Link>
            </li>
            <li>
            <Link to="/resident"><span className={style.item}>Room Details</span></Link>
            </li>
            <li>
              <Link to="/resident"><span className={style.item}>Payment Details</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
