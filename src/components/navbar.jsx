import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl py-6 flex items-center mx-auto justify-between border-b-[1px] border-zinc-700">
      <div className="nlef flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-7 bg-zinc-700"></span>
            ) : (
              <a className="text-sm flex items-center gap-1" href="#">
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.40em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-customGreen"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
