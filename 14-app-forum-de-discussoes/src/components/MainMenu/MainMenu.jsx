import React, {useState} from 'react';
import styles from './MainMenu.module.css';
import { Menu as MenuIcon } from '@mui/icons-material';

const MainMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.mainMenu}>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      <ul className={`${styles.menuList} ${isOpen ? styles.open : ''}`}>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
