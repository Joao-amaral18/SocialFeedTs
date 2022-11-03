import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

function Comment({author, comment, icon, onDelete}) {


   const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment(){
    onDelete(comment)
  }
  function addLike(){
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={icon} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author}</strong>

              <p>{comment}</p>
              <time>2h ago</time>
            </div>
            <button
            onClick={handleDeleteComment}
            title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>
        </div>
        <footer>
          <button 
          onClick={addLike}>
<span>
              {likeCount}
            </span>
            <ThumbsUp size={20} />
            
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
