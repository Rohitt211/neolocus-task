import { useNavigate } from "react-router-dom";
import Style from "./Home.style.module.css";
export default function Home() {
  const naviage = useNavigate();
  return (
    <div className={Style.home_wrapper}>
      <h2 style={{ textAlign: "center", fontSize: "50px" }}>Select room</h2>
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Click on a camera icon to start
      </p>

      <div
        onClick={() => naviage("/form")}
        className={Style.parent_image_container}
      >
        <img className={Style.background_image} src="./background_image.png" />
        <div
          onClick={() => naviage("/form")}
          className={Style.first_camera_image_container}
        >
          <img src="./camera_image.png" />
        </div>
        <div
          onClick={() => naviage("/form")}
          className={Style.second_camera_image_container}
        >
          <img src="./camera_image.png" />
        </div>
        <div
          onClick={() => naviage("/form")}
          className={Style.third_camera_image_container}
        >
          <img src="./camera_image.png" />
        </div>
        <div
          onClick={() => naviage("/form")}
          className={Style.fourth_camera_image_container}
        >
          <img src="./camera_image.png" />
        </div>
      </div>
    </div>
  );
}
