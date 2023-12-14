import Style from "./Color.style.module.css";

export default function ColorContainer({ setCurrentColor }) {
  return (
    <div className={Style.color_container_wrapper}>
      <div
        onClick={() => setCurrentColor("#FFF0CD")}
        className={Style.color_container_first_element}
      ></div>
      <div
        onClick={() => setCurrentColor("#808080")}
        className={Style.color_container_second_element}
      ></div>

      <div
        onClick={() => setCurrentColor("#575757")}
        className={Style.color_container_third_element}
      ></div>

      <div
        onClick={() => setCurrentColor("#A35656")}
        className={Style.color_container_fourth_element}
      ></div>
    </div>
  );
}
