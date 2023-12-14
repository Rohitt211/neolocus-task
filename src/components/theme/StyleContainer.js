import Style from "./Theme.style.module.css";

export default function StyleContainer({ setCurrentStyle }) {
  return (
    <div className={Style.theme_container}>
      <div
        onClick={() => setCurrentStyle("Theme 1")}
        className={Style.theme_single_element}
      ></div>
      <div
        onClick={() => setCurrentStyle("Theme 2")}
        className={Style.theme_single_element}
      ></div>

      <div
        onClick={() => setCurrentStyle("Theme 3")}
        className={Style.theme_single_element}
      ></div>

      <div
        onClick={() => setCurrentStyle("Theme 4")}
        className={Style.theme_single_element}
      ></div>
    </div>
  );
}
