import { useState } from "react";

export default function Form() {
  const [styleOpen, setStyleOpen] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("theme one");
  const [colorOpen, setColorOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("#FFF0CD");
  const [bugetOpen, setBugetOpen] = useState(false);
  const [currentBuget, setCurrentBudget] = useState("1000 SAR-5000 SAR");

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="/theme_image.png" />
      </div>
      <div
        style={{
          //   border: "1px solid red",
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #DBDBDB",
            paddingBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              // border: "2px solid green",
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div>1 .select your style</div>
            <div
              style={{ display: "flex", gap: "20px" }}
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

        <div
          style={{
            border: "1px solid #DBDBDB",
            paddingBottom: "20px",
            borderRadius: "8px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              // border: "2px solid green",
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div>2 Select your color</div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
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

        <div
          style={{
            border: "1px solid #DBDBDB",
            paddingBottom: "20px",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              // border: "2px solid green",
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div>3 Select your budget</div>
            <div
              style={{ display: "flex", gap: "20px" }}
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
            style={{
              display: "inline-block",
              background: "#C98E42",
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

function StyleContainer({ setCurrentStyle }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div
        onClick={() => setCurrentStyle("theme one")}
        style={{ height: "100px", flexGrow: 1, background: "#D9D9D9" }}
      ></div>
      <div
        onClick={() => setCurrentStyle("theme two")}
        style={{ height: "100px", flexGrow: 1, background: "#D9D9D9" }}
      ></div>

      <div
        onClick={() => setCurrentStyle("theme three")}
        style={{ height: "100px", flexGrow: 1, background: "#D9D9D9" }}
      ></div>

      <div
        onClick={() => setCurrentStyle("theme four")}
        style={{ height: "100px", flexGrow: 1, background: "#D9D9D9" }}
      ></div>
    </div>
  );
}

function ColorContainer({ setCurrentColor }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div
        onClick={() => setCurrentColor("#FFF0CD")}
        style={{ height: "100px", flexGrow: 1, background: "#FFF0CD" }}
      ></div>
      <div
        onClick={() => setCurrentColor("#808080")}
        style={{ height: "100px", flexGrow: 1, background: "#808080" }}
      ></div>

      <div
        onClick={() => setCurrentColor("#575757")}
        style={{ height: "100px", flexGrow: 1, background: "#575757" }}
      ></div>

      <div
        onClick={() => setCurrentColor("#A35656")}
        style={{ height: "100px", flexGrow: 1, background: "#A35656" }}
      ></div>
    </div>
  );
}

function BudgetContainer({ setCurrentBudget }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          onClick={() => setCurrentBudget("1000 SAR-5000 SAR")}
          style={{
            paddingTop: "30px",
            textAlign: "center",
            flexGrow: 1,
            height: "50px",
            background: "#F4F4F4",
          }}
        >
          1000 SAR-5000 SAR
        </div>
        <div
          onClick={() => setCurrentBudget("6000 SAR-10.000 SAR")}
          style={{
            paddingTop: "30px",
            textAlign: "center",
            flexGrow: 1,
            height: "50px",
            background: "#F4F4F4",
          }}
        >
          6000 SAR-10.000 SAR
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          onClick={() => setCurrentBudget("11,000 SAR-15,000 SAR")}
          style={{
            paddingTop: "30px",
            textAlign: "center",
            flexGrow: 1,
            height: "50px",
            background: "#F4F4F4",
          }}
        >
          11,000 SAR-15,000 SAR
        </div>

        <div
          onClick={() => setCurrentBudget("16,000 SAR-20,000 SAR")}
          style={{
            paddingTop: "30px",
            textAlign: "center",
            flexGrow: 1,
            height: "50px",
            background: "#F4F4F4",
          }}
        >
          16,000 SAR-20,000 SAR
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
