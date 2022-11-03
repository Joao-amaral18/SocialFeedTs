import styles from "./Avatar.module.css";

function Avatar({ hasBorder = true, src }) {
  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </div>
  );
}

export default Avatar;
