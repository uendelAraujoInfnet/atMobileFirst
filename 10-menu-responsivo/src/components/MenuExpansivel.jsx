import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MenuExpansivel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!isLargeScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LogoMarca
          </Typography>

          {isLargeScreen ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              <MenuItem>Opção 1</MenuItem>
              <MenuItem>Opção 2</MenuItem>
              <MenuItem>Opção 3</MenuItem>
              <MenuItem>Opção 4</MenuItem>
            </Box>
          ) : (
            isMenuOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "64px",
                  width: "100%",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleMenuToggle}>Home</MenuItem>
                <MenuItem onClick={handleMenuToggle}>Contato</MenuItem>
                <MenuItem onClick={handleMenuToggle}>Produtos</MenuItem>
                <MenuItem onClick={handleMenuToggle}>Sobre Nós</MenuItem>
                <MenuItem onClick={handleMenuToggle}>Parceiros</MenuItem>
              </Box>
            )
          )}

          <IconButton edge="end" color="inherit" aria-label="account">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuExpansivel;
