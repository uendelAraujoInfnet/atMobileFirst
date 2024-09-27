import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const MenuExpansivel = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Ícone para abrir o menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Marca */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LogoMarca
          </Typography>

          {/* Ícone do usuário */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>

        {/* Menu Expandido */}
        {isMenuOpen && (
          <Box sx={{ backgroundColor: 'white', color: 'black' }}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Produtos</MenuItem>
            <MenuItem onClick={handleClose}>Contato</MenuItem>
            <MenuItem onClick={handleClose}>Sobre Nós</MenuItem>
            <MenuItem onClick={handleClose}>Parceiros</MenuItem>
          </Box>
        )}
      </AppBar>
    </Box>
  );
};

export default MenuExpansivel
