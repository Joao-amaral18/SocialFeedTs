import React from "react";
import { useState } from "react";
import styles from "./Post.module.css";
import Comment from "./components/Comment";
import { format, formatDistanceToNow } from "date-fns";
import Avatar from "./components/Avatar";
import { ptBR } from "date-fns/locale";

function Post(props) {
  const publishedAt = format(props.published, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedAtFromNow = formatDistanceToNow(props.published, {
    locale: ptBR,
    addSuffix: true,
  });
  const [comments, setComments] = useState([
    {
      author: "as vezes vc me pergunta",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
    {
      author: "eu mesmo ",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComent() {
    event.preventDefault();
    setComments([
      ...comments,
      {
        author: "as vezes vc me pergunta",
        icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
        comment: newCommentText,
        authorInfo: "This is your brain",
        published: "2022-08-13 12:21:00",
      },
    ]);
    setNewCommentText("");
  }
  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete){
    const commentToBeDeleted = comments.filter(comment => {
 console.log(commentToDelete)
      return comment.comment !== commentToDelete
    })

    setComments(commentToBeDeleted)
  }
  const isNewCommentEmpity = newCommentText.length === 0;
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={props.icon} />
            <div className={styles.authorInfo}>
              <strong>{props.author}</strong>
              <span>{props.authorInfo}</span>{" "}
            </div>{" "}
          </div>{" "}
          <time title={publishedAt} dateTime={props.published.toISOString()}>
            {" "}
            {publishedAtFromNow}{" "}
          </time>{" "}
        </header>{" "}
        <div className={styles.content}>{props.content}</div>{" "}
        <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
          {" "}
          <textarea
            name="comment"
            onChange={handleNewCommentChange}
            placeholder="Deixe seu comentario"
            value={newCommentText}
          ></textarea>{" "}
          <footer>
            {" "}
            <button
            disabled={isNewCommentEmpity}>Comentar</button>{" "}
          </footer>{" "}
        </form>{" "}
        <div className={styles.commentList}>
          {" "}
          <div className={styles.commentList}>
            {" "}
            {comments.map(val => (
              <Comment
              key={val.comment}
              onDelete={deleteComment}
                author={val.author}
                comment={val.comment}
                icon={val.icon}
              />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </article>{" "}
    </div>
  );
}
export default Post;
