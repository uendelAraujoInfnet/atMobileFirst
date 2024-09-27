import React from "react";
import styles from "./ForumPost.module.css";
import { Favorite, Comment } from "@mui/icons-material";

const ForumPost = ({
  title,
  subtitle,
  description,
  author,
  date,
  likes,
  replies,
}) => {
  return (
    <div className={styles.forumPost}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <div className={styles.postDetails}>
        <span>Author: {author}</span>
        <span>Date: {date}</span>
        <div className={styles.postStats}>
          <span>
            <Favorite /> {likes}
          </span>
          <span>
            <Comment /> {replies}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
