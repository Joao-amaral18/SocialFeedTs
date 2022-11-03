import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <img className="logo" src={logo} alt="logo" />
      Social Feed
    </div>
  );
}

export default Header;
