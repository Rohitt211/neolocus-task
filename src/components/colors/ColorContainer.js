import Style from "./Color.style.module.css";

export default function ColorContainer({ setCurrentColor }) {
  const colorsData = ["#FFF0CD", "#808080", "#575757", "#A35656"];
  return (
    <div className={Style.color_container_wrapper}>
      {colorsData.map((ele, index) => {
        return (
          <div
            onClick={() => setCurrentColor(ele)}
            className={`${Style[`color_container_${index}`]}`}
          ></div>
        );
      })}
    </div>
  );
}
