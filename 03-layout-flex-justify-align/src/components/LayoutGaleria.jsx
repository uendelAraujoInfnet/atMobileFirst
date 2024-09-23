import React, { useState } from 'react';
import styles from "./LayoutGaleria.module.css";

const LayoutGaleria = () => {
  const [images, setImages] = useState(5);

  const addImage = () => setImages(images + 1);
  const removeImage = () => setImages(images > 0 ? images - 1 : 0);



  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button onClick={addImage}>+</button>
        <span>{images}</span>
        <button onClick={removeImage}>-</button>
      </div>

      <div className={styles.gallery}>
        {Array.from({length: images}).map((_, index) => (
          <div key={index} className={styles.imagePlaceholder}>
            <p>Imagem Ficticia</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutGaleria
