import React, {useState} from 'react';
import styles from './ReplyForm.module.css';

const ReplyForm = ({ user, onSubmit }) => {
  const [reply, setReply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reply);
    setReply('');
  };

  return (
    <form className={styles.replyForm} onSubmit={handleSubmit}>
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write your reply..."
        required
      />
      <button type="submit">Send</button>
      <div className={styles.user}>Logged in as: {user}</div>
    </form>
  );
};

export default ReplyForm;
