import React from 'react';
import styles from './ContributionList.module.css';
import { Favorite, Delete } from '@mui/icons-material';

const ContributionList = ({ contributions, onDelete }) => {
  return (
    <div className={styles.contributions}>
      {contributions.map((contribution) => (
        <div key={contribution.id} className={styles.contribution}>
          <p>{contribution.text}</p>
          <div className={styles.contributionDetails}>
            <span>Autor: {contribution.author}</span>
            <span>Data: {contribution.date}</span>
            <span>
              <Favorite /> {contribution.likes}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => onDelete(contribution.id)}
              aria-label="Excluir contribuição"
            >
              <Delete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributionList;