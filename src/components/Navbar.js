import Styles from "./Navbar.style.module.css";

export default function Navbar() {
  return (
    <div className={Styles.navbar_wrapper}>
      <div>
        <img src="/image_logo.png" />
      </div>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "20px",
          paddingRight: "50px",
        }}
      >
        <span>Floor Plan</span>
        <span>Favourites</span>
      </div>
    </div>
  );
}
