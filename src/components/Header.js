import React from "react";
import styled from "styled-components";
import logo_white from "../asset/header/logo_white.png";
import profile_white from "../asset/header/profile_white.png";
import { NavLink, withRouter } from "react-router-dom";

const Header = ({ location, match, history }) => {
  return (
    <>
      <div className="styled_header">
        <div className="wrap">
          <div className="styled_logo">
            <NavLink
              className="Menu"
              to="/"
              onClick={() => {
                if (location.pathname === "/") window.location.reload();
              }}
            >
              <img src={logo_white} height="35" alt="" />
            </NavLink>
          </div>
          <div className="styled_menu">
            <NavLink className="Menu" to="/about">
              동아리
            </NavLink>
            <NavLink className="Menu" to="/gallery">
              갤러리
            </NavLink>
            <NavLink className="Menu" to="/board">
              게시판
            </NavLink>
            <NavLink className="Menu" to="/pungmul">
              풍물
            </NavLink>
            {/* <NavLink className="Menu" to="/pungsa">
              풍사
            </NavLink> */}
            {/* <NavLink className="Menu" to="/jokbo">
              족보
            </NavLink> */}
          </div>
          <div className="styled_profile">
            <NavLink className="Menu" to="/profile">
              <div style={{ color: "white" }}>
                {window.localStorage.getItem("imageUrl") == null ? (
                  <img
                    className="profile"
                    src={profile_white}
                    height="35"
                    alt=""
                  />
                ) : (
                  <img
                    className="profile"
                    src={
                      process.env.PUBLIC_URL +
                      window.localStorage.getItem("imageUrl")
                    }
                    height="35"
                    alt=""
                  />
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
