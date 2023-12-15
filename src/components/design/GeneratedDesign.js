import { useEffect, useState } from "react";
import axios from "axios";
import Style from "./GenerateDesign.style.module.css";
export default function GeneratedDesign() {
  const [designData, setDesignData] = useState(null);
  const handImageData = [0, 1, 2];
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
      .post(process.env.REACT_APP_BASE_URL, data, {
        headers: headers,
      })
      .then((res) => {
        setDesignData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    generateDesignR();
  }, []);
  return (
    <>
      {designData ? (
        <div className={Style.generateDesignWrapper}>
          <div className={Style.second_wrapper}>
            <div style={{ position: "relative" }}>
              <img
                className={Style.generic_image}
                src={`data:image/png;base64, ${designData?.output_image}`}
              />
              {handImageData.map((ele, index) => {
                return (
                  <img
                    className={`${Style[`hand_image_${index}`]}`}
                    src="/hand-popup.png"
                  />
                );
              })}
            </div>
            <div className={Style.inner_container}>
              <p style={{ flexGrow: 1 }}>
                Total Price <span style={{ color: "green" }}>$750</span>
              </p>
              <div className={Style.inner_container_2}>
                <button className={Style.addFurnitureButton}>
                  Add furniture
                </button>
                <button className={Style.redesingButton}>Redesign</button>
              </div>
            </div>
          </div>
          <div className={Style.second_container}>
            <div className={Style.inside_container}>
              <img className={Style.blink_me} src="/hand-icon.png" />
              <p style={{ fontSize: "30px" }}>
                Click on any item to see details{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className={Style.please_wait_heading}>please wait...</h1>
      )}
    </>
  );
}
