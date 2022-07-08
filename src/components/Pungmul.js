import React from "react";
import inst1 from "../asset/instruments/inst1.png";
import inst2 from "../asset/instruments/inst2.png";
import inst3 from "../asset/instruments/inst3.png";
import inst4 from "../asset/instruments/inst4.png";
import inst5 from "../asset/instruments/inst5.png";
import instEnd from "../asset/instruments/instEnd.png";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DelayLink from "react-delay-link";

function getRandomColor() {
  console.log("random!");
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

let numbers = [0, 1, 2, 3, 4];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(numbers);

const _inst = [inst1, inst2, inst3, inst4, inst5];

const Test = styled.button`
  background-color: ${getRandomColor};
  position: absolute;
  top: 0;
  width: 100vw;
  height: 75px;
`;

function Pungmul() {
  return (
    <>
      <div
        className="contents"
        style={{
          height: "100vh",
          backgroundColor: "white",
          // backgroundColor: "#D8D2C1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {window.localStorage.getItem("changeColor") && <Test />}
        <div className="instruments">
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/kkwaenggwari">
              <img
                className="inst"
                src={_inst[numbers[0]]}
                alt=""
                style={{ width: "46px", filter: "invert(100%)" }}
                onClick={() => {
                  setTimeout(500);
                }}
              />
            </DelayLink>
            <div className="text">쇠</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/janggu">
              <img
                className="inst"
                src={_inst[numbers[1]]}
                alt=""
                style={{ width: "112px", filter: "invert(100%)" }}
              />
            </DelayLink>
            <div className="text">장구</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/drum">
              <img
                className="inst"
                src={_inst[numbers[2]]}
                alt=""
                style={{ width: "86px", filter: "invert(100%)" }}
              />
            </DelayLink>
            <div className="text">북</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/jing">
              <img
                className="inst"
                src={_inst[numbers[3]]}
                alt=""
                style={{ width: "96px", filter: "invert(100%)" }}
              />
            </DelayLink>
            <div className="text">징</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/sogo">
              <img
                className="inst"
                src={_inst[numbers[4]]}
                alt=""
                style={{ width: "64px", filter: "invert(100%)" }}
              />
            </DelayLink>
            <div className="text">소고</div>
          </div>
          <NavLink to="/pungmul">
            <img
              className="changeColor"
              backgroundColor="red"
              src={instEnd}
              alt=""
              style={{ width: "5px", filter: "invert(100%)" }}
              onClick={() => {
                window.localStorage.setItem("changeColor", true);
              }}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Pungmul;