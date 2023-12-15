import { useNavigate } from "react-router-dom";
import Style from "./Home.style.module.css";
export default function Home() {
  const naviage = useNavigate();
  const imageData = [0, 1, 2, 3];
  return (
    <div className={Style.home_wrapper}>
      <h2 className={Style.room_heading}>Select room</h2>
      <p className={Style.room_second_heading}>
        Click on a camera icon to start
      </p>

      <div
        onClick={() => naviage("/form")}
        className={Style.parent_image_container}
      >
        <img className={Style.background_image} src="./background_image.png" />
        {imageData.map((ele, index) => {
          return (
            <div
              onClick={() => naviage("/form")}
              className={`${Style[`camera_image_container_${index}`]}`}
            >
              <img src="./camera_image.png" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
