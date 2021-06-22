
import React, { useState, useEffect, createContext, useContext } from "react";
import "./styles.css";

const viewportContext = createContext({});

let sizes = [
  [{ max: "1920px", min: "900px" }, "responsive_large"],
  [{ max: "899px", min: "400px" }, "responsive_medium"],
  [{ max: "400px", min: "0px" }, "responsive_small"]
];

const getCurrScreen = () => {
  var found;
  let [large, medium, small] = sizes;

  [large, medium, small].forEach((each) => {
    if (each !== undefined) {
      let [pixel_control, responsiveClass] = each;
      var sizeMax = window.matchMedia(`(max-width: ${pixel_control.max})`)
        .matches;
      var sizeMin = window.matchMedia(`(min-width: ${pixel_control.min})`)
        .matches;

      if (sizeMax && sizeMin) found = responsiveClass;
    }
  });
  return found;
};

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [className, setClass] = useState("");

  const handleWindowResize = debounce(() => {
    setWidth(window.innerWidth);
    let screen = getCurrScreen();
    setClass(screen);
  }, 500);

  useEffect(() => {
    let screen = getCurrScreen();
    setClass(screen);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, className }}>
      {children}
    </viewportContext.Provider>
  );
};

export default ViewportProvider;
