import { useState } from "react";
import Style from "./Theme.style.module.css";

export default function StyleContainer({ setCurrentStyle }) {
  const themeData = ["Theme 1", "Theme 2", "Theme 3", "Theme 4"];
  return (
    <div className={Style.theme_container}>
      {themeData.map((ele, index) => {
        return (
          <div
            onClick={() => setCurrentStyle(ele)}
            className={Style.theme_single_element}
          ></div>
        );
      })}
    </div>
  );
}
