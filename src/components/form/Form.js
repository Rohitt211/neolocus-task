import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Style from "./Form.style.module.css";
import StyleContainer from "../theme/StyleContainer";
import ColorContainer from "../colors/ColorContainer";
import BudgetContainer from "../budget/BudgetContainer";

export default function Form() {
  const [styleOpen, setStyleOpen] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("");
  const [colorOpen, setColorOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("");
  const [bugetOpen, setBugetOpen] = useState(false);
  const [currentBuget, setCurrentBudget] = useState("");
  const navigate = useNavigate();

  const generateDesign = () => {
    navigate("/response");
  };

  return (
    <div className={Style.form_wrapper}>
      <div>
        <img className={Style.theme_image} src="/theme_image.png" />
      </div>
      <div className={Style.element_list_container}>
        <div className={Style.single_element}>
          <div className={Style.single_element_inside_element}>
            <div>1 Select your style</div>
            <div
              className={Style.dropdown_icon}
              onClick={() => {
                setBugetOpen(false);
                setColorOpen(false);
                setStyleOpen(!styleOpen);
              }}
            >
              <span>{currentStyle}</span> <DropDownSvg />
            </div>
          </div>
          <div>
            {styleOpen && <StyleContainer setCurrentStyle={setCurrentStyle} />}
          </div>
        </div>

        <div className={Style.single_element_second}>
          <div className={Style.single_element_inside_element}>
            <div>2 Select your color</div>
            <div
              className={Style.color_open_inside_element}
              onClick={() => {
                setBugetOpen(false);
                setStyleOpen(false);
                setColorOpen(!colorOpen);
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: currentColor,
                  width: "80px",
                  height: "30px",
                }}
              ></div>{" "}
              <DropDownSvg />
            </div>
          </div>
          <div>
            {colorOpen && <ColorContainer setCurrentColor={setCurrentColor} />}
          </div>
        </div>

        <div className={Style.single_element_third}>
          <div className={Style.single_element_inside_element}>
            <div>3 Select your budget</div>
            <div
              className={Style.dropdown_icon}
              onClick={() => {
                setColorOpen(false);
                setStyleOpen(false);
                setBugetOpen(!bugetOpen);
              }}
            >
              <span>{currentBuget}</span> <DropDownSvg />
            </div>
          </div>
          <div>
            {bugetOpen && (
              <BudgetContainer setCurrentBudget={setCurrentBudget} />
            )}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            disabled={!currentBuget || !currentColor || !currentStyle}
            onClick={() => generateDesign()}
            style={{
              display: "inline-block",
              background:
                !currentBuget || !currentColor || !currentStyle
                  ? "#D9D9D9"
                  : "#C98E42",
              padding: "20px",
              border: "none",
              width: "80%",
              borderRadius: "50px",
              color: "white",
              marginTop: "20px",
            }}
          >
            Generate design
          </button>
        </div>
      </div>
    </div>
  );
}

function DropDownSvg() {
  return (
    <svg
      width="21"
      height="12"
      viewBox="0 0 21 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.900723 2.36356L9.37802 10.8409C9.37802 10.8409 10.4469 12.1971 11.7537 10.7017L19.6273 2.70603C19.9596 2.3681 20.1351 1.89066 20.0461 1.42474C19.9868 1.11226 19.8118 0.800137 19.3922 0.627857C18.3443 0.197854 17.7155 0.885928 17.7155 0.885928L10.4863 8.13983L3.20628 0.885928C3.20628 0.885928 2.34453 0.0799786 1.50614 0.627857C0.667761 1.17574 0.79575 2.25859 0.900723 2.36356Z"
        fill="black"
      />
    </svg>
  );
}
