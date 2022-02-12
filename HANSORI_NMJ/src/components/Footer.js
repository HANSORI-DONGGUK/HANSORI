import React from "react";
import footer_logo from "../asset/footer/footer_logo.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="wrap">
        <div className="left">
          <img src={footer_logo} height="25" />
        </div>
        <div className="right">
          동국대학교 원흥관 1층 복도 끝<br />
          Copyright ⓒ 1990-2021 한소리 All Rights Reserved.
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
