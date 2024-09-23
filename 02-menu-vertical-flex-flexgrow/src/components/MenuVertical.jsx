import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import GroupIcon from "@mui/icons-material/Group";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./MenuVertical.module.css";

const MenuVertical = () => {
  return (
    <aside className={styles.menu}>
      {/* LOGO */}
      <div className={styles.menuHeader}>
        <img
          src="https://images.seeklogo.com/logo-png/54/2/jupiter-hammerheads-logo-png_seeklogo-541037.png"
          alt="Logo"
          className={styles.logo}
        />
        <IconButton className={styles.menuButton}>
          <MenuIcon style={{fontSize: "50px", color:"aliceblue"}}/>
        </IconButton>
      </div>

      {/* LINKS DO MENU */}
      <nav className={styles.menuItems}>
        <div className={styles.menuItem}>
          <AccountCircleIcon fontSize="large" />
          <span>Perfil</span>
        </div>
        <div className={styles.menuItem}>
          <PostAddIcon fontSize="large" />
          <span>Postagens</span>
        </div>
        <div className={styles.menuItem}>
          <GroupIcon fontSize="large" />
          <span>Amigos</span>
        </div>
        <div className={styles.menuItem}>
          <PhotoLibraryIcon fontSize="large" />
          <span>Fotos</span>
        </div>
        <div className={styles.menuItem}>
          <VideoLibraryIcon fontSize="large" />
          <span>Vídeos</span>
        </div>
        <div className={styles.menuItem}>
          <SettingsIcon fontSize="large" />
          <span>Configurações</span>
        </div>
      </nav>
    </aside>
  );
};

export default MenuVertical;
