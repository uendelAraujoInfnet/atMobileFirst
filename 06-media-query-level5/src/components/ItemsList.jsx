import React, { useState } from "react";
import { IconButton, useMediaQuery, TextField } from "@mui/material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Delete from "@mui/icons-material/Delete";
import styles from "./ItemsList.module.css";

const ItemsList = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [items, setItems] = useState([
    { id: 1, name: "Camisa Polo Lacoste", price: 299.99, quantity: 12 },
    { id: 2, name: "Calça Jeans Lacoste", price: 517.99, quantity: 10 },
    { id: 3, name: "Tênis All Lacoste", price: 854.99, quantity: 7 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", price: "", quantity: "" });

  const handleAddItem = () => {
    if (newItem.name && newItem.price && newItem.quantity) {
      const itemToAdd = {
        id: items.length + 1,
        name: newItem.name,
        price: parseFloat(newItem.price).toFixed(2),
        quantity: parseInt(newItem.quantity),
      };
      
      setItems([...items, itemToAdd]);
      setNewItem({ name: "", price: "", quantity: "" });
    }
  }

    const handleRemoveItem = (id) => {
      setItems(items.filter((item) => item.id !== id));
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewItem({ ...newItem, [name]: value });
    };

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
      <div className={`${styles.container} ${prefersDarkMode ? styles.dark : styles.light}`}>
      <h1>Shopping List</h1>
      <div className={styles.list}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <span>{item.name}</span>
            <span>Unit Price: ${item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Total: ${item.price * item.quantity}</span>
            <IconButton onClick={() => handleRemoveItem(item.id)}>
              <Delete />
            </IconButton>
          </div>
        ))}
      </div>

      {/* Inputs para adicionar novos itens */}
      <div className={styles.addItemForm}>
        <TextField
          label="Item Name"
          variant="outlined"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          className={styles.inputField}
        />
        <TextField
          label="Price"
          variant="outlined"
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleChange}
          className={styles.inputField}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleChange}
          className={styles.inputField}
        />
        <IconButton onClick={handleAddItem}>
          <AddShoppingCart /> Add Item
        </IconButton>
      </div>

      <div className={styles.total}>
        <p>Total Purchase: ${totalPrice}</p>
      </div>
    </div>
    );
  };


export default ItemsList;
