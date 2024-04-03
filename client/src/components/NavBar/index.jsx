import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const NavBar = ({ nav, setNav }) => {
  const p = useLocation();
  let opacity = nav ? "1" : "0";
  let transitionDelay = nav ? "0.5s" : "0s";
  return (
    <div className="nav">
      <div
        className="top"
        style={{
          opacity: opacity,
          transitionProperty: "opacity",
          transitionDelay: transitionDelay,
        }}
      >
        <div className="logo">
          <img
            src="https://st-dse.vnua.edu.vn:6880/assets/img/FITA.png"
            alt="logo"
          />
        </div>
        <div className="info">
          <h3>Quản lý công việc</h3>
          <p>WorkSpace</p>
        </div>
        <div className="icon" onClick={() => setNav(false)}>
          <i className="bx bx-chevron-left"></i>
        </div>
      </div>
      <div
        className="mid"
        style={{
          opacity: opacity,
          transitionProperty: "opacity",
          transitionDelay: transitionDelay,
        }}
      >
        <Link
          to={"/activate"}
          className={`item ${p.pathname === "/activate" ? "active" : ""}`}
        >
          <i className="bx bx-run"></i>
          <p>Hoạt động</p>
        </Link>

        <div className="line"></div>
        <Link to={"/"} className={`item ${p.pathname === "/" ? "active" : ""}`}>
          <i className="bx bx-home"></i>
          <p>Tổng quan</p>
        </Link>
        <Link
          to={"/board"}
          className={`item ${p.pathname.startsWith("/board") ? "active" : ""}`}
        >
          <i className="bx bx-grid-alt"></i>
          <p>Công việc</p>
        </Link>
        <div className="item">
          <i className="bx bx-calendar-minus"></i>
          <p>Lịch trình</p>
        </div>
      </div>

      <div
        className="bot"
        style={{
          opacity: opacity,
          transitionProperty: "opacity",
          transitionDelay: transitionDelay,
        }}
      >
        {/* <div className="item">
                    <i className="bx bx-help-circle"></i>
                    <p>Giúp đỡ</p>
                </div> */}
        <div className="item">
          <i className="bx bx-cog"></i>
          <p>Cài đặt</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
