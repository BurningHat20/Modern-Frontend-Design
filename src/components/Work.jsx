import React from "react";

function Work() {
  var images = [
    {
      url: "http://tinyurl.com/2yrpawqn",
      top: "62%",
      left: "49%",
      isActive: false,
    },
    {
      url: "http://tinyurl.com/24k2l6rw",
      top: "68%",
      left: "46%",
      isActive: false,
    },
    {
      url: "http://tinyurl.com/22vacxoy",
      top: "55%",
      left: "52%",
      isActive: false,
    },
    {
      url: "http://tinyurl.com/2739arpv",
      top: "70%",
      left: "49%",
      isActive: false,
    },
    {
      url: "http://tinyurl.com/2apjuk35",
      top: "62%",
      left: "53%",
      isActive: false,
    },
    {
      url: "http://tinyurl.com/244vvnmt",
      top: "58%",
      left: "48%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[38vw] leading-none font-medium ">work</h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="absolute w-[260px] rounded-xl -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
