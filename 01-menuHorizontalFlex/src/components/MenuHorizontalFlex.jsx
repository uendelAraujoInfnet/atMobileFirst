import React from "react";
import styles from "./MenuHorizontalFlex.module.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MenuHorizontalFlex = () => {
  return (
    <nav className={styles.menuPrincipal}>
      <div className={styles.menuLogo}>
        <a href="#">
          <img
            src="https://images.seeklogo.com/logo-png/54/2/jupiter-hammerheads-logo-png_seeklogo-541037.png"
            alt="Logo"
          />
        </a>
      </div>

      <div className={styles.menuItens}>
        <ul className={styles.menuItensList}>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>

      <div className={styles.menuIcon}>
        <IconButton>
          <AccountCircleIcon style={{ fontSize: "75px",color:"black" }} />
        </IconButton>
      </div>
    </nav>
  );
};

export default MenuHorizontalFlex;
