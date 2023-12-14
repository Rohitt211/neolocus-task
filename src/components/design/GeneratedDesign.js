import { useEffect, useState } from "react";
import axios from "axios";
import Style from "./GenerateDesign.style.module.css";
export default function GeneratedDesign() {
  const [designData, setDesignData] = useState(null);
  const generateDesignR = () => {
    const style = "modern";
    const pic_id = "room4";
    const project_id = "full-house";
    const budget = 4000;

    const data = {
      style: style,
      project_id: project_id,
      pic_id: pic_id,
      hardcoded_pics: ["01", "02", "03", "05", "06", "07"],
      budget: budget,
    };
    const headers = {
      "Content-type": "application/json",
      Accept: "application/json",
      "x-api-key": "9de70a5e-01e6-4ece-b100-d35a7a4bbab7",
    };

    axios
      .post("https://neolocus.xyz/endpoint_integration", data, {
        headers: headers,
      })
      .then((res) => {
        setDesignData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let img = "/theme_image.png";

  useEffect(() => {
    generateDesignR();
  }, []);
  return (
    <>
      {designData ? (
        <div className={Style.generateDesignWrapper}>
          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <div style={{ position: "relative" }}>
              <img
                width="100%"
                height="500px"
                className={Style.generic_image}
                src={`data:image/png;base64, ${designData?.output_image}`}
              />
              <img
                style={{ position: "absolute", top: "80%", left: "10%" }}
                src="/hand-popup.png"
              />
              <img
                style={{ position: "absolute", top: "70%", left: "40%" }}
                src="/hand-popup.png"
              />
              <img
                style={{ position: "absolute", top: "80%", right: "10%" }}
                src="/hand-popup.png"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ flexGrow: 1 }}>
                Total Price <span style={{ color: "green" }}>$750</span>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  gap: 4,
                }}
              >
                <button className={Style.addFurnitureButton}>
                  Add furniture
                </button>
                <button className={Style.redesingButton}>Redesign</button>
              </div>
            </div>
          </div>
          <div className={Style.second_container}>
            <div className={Style.inside_container}>
              <img
                className={Style.blink_me}
                src="/hand-icon.png"
                style={{ cursor: "pointer" }}
              />
              <p style={{ fontSize: "30px" }}>
                Click on any item to see details{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ marginTop: "50px", textAlign: "center" }}>
          please wait...
        </h1>
      )}
    </>
  );
}
