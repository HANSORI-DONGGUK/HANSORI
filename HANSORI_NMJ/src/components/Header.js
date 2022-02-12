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
              <img src={logo_white} height="35" />
            </NavLink>
          </div>
          <div className="styled_menu">
            <NavLink className="Menu" to="/about">
              동아리소개
            </NavLink>
            <NavLink className="Menu" to="/gallery">
              갤러리
            </NavLink>
            <NavLink className="Menu" to="/pungsa">
              풍사
            </NavLink>
            <NavLink className="Menu" to="/jokbo">
              족보
            </NavLink>
          </div>
          <div className="styled_profile">
            <NavLink className="Menu" to="/profile">
              <img src={profile_white} height="35" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);

// const StyledHeader = styled.div`
//   width: 100%;
//   height: 75px;
//   display: flex;
//   justify-content: space-between;
//   background-color: rgba(0, 0, 0, 0.2);
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 200;
// `;

// const StyledLogo = styled.div`
//   width: 20%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const StyledMenu = styled.div`
//   width: 60%;
//   color: white;
//   font-size: 20px;
//   font-weight: bold;
//   display: flex;
//   justify-content: space-around;
// `;

// const StyledProfile = styled.div`
//   width: 20%;
//   display: flex;
//   align-items: center;
//   justify-content: center;