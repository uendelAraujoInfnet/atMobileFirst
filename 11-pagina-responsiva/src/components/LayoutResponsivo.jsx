import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './LayoutResponsivo.module.css';

const LayoutResponsivo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>Header</span>
        <MenuIcon className={styles.menuIcon} onClick={toggleMenu} />
        <AccountCircleIcon className={styles.profileIcon} />
      </header>

      {/* Menu Global - Expande/Colapsa */}
      <nav className={`${styles.globalMenu} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Localização</a></li>
          <li><a href="#">Parceiros</a></li>
        </ul>
      </nav>

      <aside className={styles.contextMenu}>Context Menu</aside>
      <main className={styles.mainContent}>Main Content</main>
      <aside className={styles.ads}>Ads</aside>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default LayoutResponsivo;

