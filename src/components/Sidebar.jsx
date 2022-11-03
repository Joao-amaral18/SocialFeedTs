import styles from "./Sidebar.module.css";
import Avatar from "./Avatar";

function Sidebar(props) {
  return (
    <aside className={styles.sidebar}>
      <img className="cover" src={props.banner} />
      <div className={styles.profile}>
        <Avatar src={props.icon} />
        <strong>{props.name}</strong>
        <span>{props.about}</span>
      </div>
    </aside>
  );
}

export default Sidebar;
