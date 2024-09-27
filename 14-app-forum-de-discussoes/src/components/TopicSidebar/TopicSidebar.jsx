import React from "react";
import styles from "./TopicSidebar.module.css";

const TopicSidebar = ({ recentTopics, mostReplied, mostLiked }) => {
  return (
    <aside className={styles.topicSidebar}>
      <div className={styles.topicList}>
        <h4>Recent Topics</h4>
        <ul>
          {recentTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className={styles.topicList}>
        <h4>Most Replied Topics</h4>
        <ul>
          {mostReplied.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className={styles.topicList}>
        <h4>Most Liked Topics</h4>
        <ul>
          {mostLiked.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TopicSidebar;
