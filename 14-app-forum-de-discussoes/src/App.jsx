import React from "react";
import ForumPost from "./components/ForumPost/ForumPost";
import ContributionList from "./components/ContributionList/ContributionList";
import ReplyForm from "./components/ReplyForm/ReplyForm";
import MainMenu from "./components/MainMenu/MainMenu";
import TopicSidebar from "./components/TopicSidebar/TopicSidebar";
import styles from "./App.module.css";

const App = () => {
  const forumPost = {
    title: "How to Learn React?",
    subtitle: "React Basics and Beyond",
    description: "Discussing the best strategies for learning React.",
    author: "John Doe",
    date: "2024-09-25",
    likes: 1466,
    replies: 45,
  };

  const contributions = Array.from({ length: 45 }, (_, i) => ({
    text: `Contribution ${i + 1}`,
    author: `User ${i + 1}`,
    date: "2024-09-25",
    likes: (i + 12) * 9,
  }));

  const recentTopics = [
    "React Hooks",
    "State Management",
    "Routing",
    "Testing",
    "Performance",
  ];
  const mostReplied = [
    "React Context",
    "Forms in React",
    "Component Lifecycle",
    "Hooks",
    "Redux",
  ];
  const mostLiked = [
    "React vs Vue",
    "Virtual DOM",
    "JSX Deep Dive",
    "UseEffect",
    "React 18 Features",
  ];

  const handleReplySubmit = (reply) => {
    console.log("New Reply:", reply);
  };

  const handleDeleteContribution = (id) => {
    setContributions(
      contributions.filter((contribution) => contribution.id !== id)
    );
  };

  return (
    <div className={styles.app}>
      <MainMenu options={["Home", "Topics", "Profile", "Settings", "Logout"]} />
      <ForumPost {...forumPost} />
      <ContributionList
        contributions={contributions}
        onDelete={handleDeleteContribution}
      />
      <ReplyForm user="Jane Doe" onSubmit={handleReplySubmit} />
      <TopicSidebar
        recentTopics={recentTopics}
        mostReplied={mostReplied}
        mostLiked={mostLiked}
      />
    </div>
  );
};

export default App;
