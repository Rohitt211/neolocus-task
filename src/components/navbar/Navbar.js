import Styles from "./Navbar.style.module.css";

export default function Navbar() {
  return (
    <div className={Styles.navbar_wrapper}>
      <div>
        <img src="/image_logo.png" />
      </div>
      <div className={Styles.navbar_second_wrapper}>
        <span>Floor Plan</span>
        <span>Favourites</span>
      </div>
    </div>
  );
}
