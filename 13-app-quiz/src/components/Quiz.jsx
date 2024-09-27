import React, { useState } from "react";
import { Button, IconButton, Typography, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styles from "./Quiz.module.css";
import { questions } from "../questionsMock.js";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null) return;

    setShowAnswer(true);

    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Box className={isDarkMode ? styles.dark : styles.light} sx={{ padding: '20px', textAlign: 'center' }}>
      <IconButton onClick={toggleTheme} className={styles.iconChangeColor}>
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      <Typography variant="h4" gutterBottom>Quiz de Responsividade</Typography>
      
      <Typography variant="h6">{questions[currentQuestion].question}</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {questions[currentQuestion].options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionClick(index)}
            variant={selectedOption === index ? 'contained' : 'outlined'}
            sx={{ width: '300px', margin: '10px 0' }}
          >
            {option}
          </Button>
        ))}

        <IconButton onClick={handleConfirm} color="primary" sx={{ marginTop: '20px' }}>
          {showAnswer ? <CheckIcon /> : <CheckIcon />}
        </IconButton>
      </Box>

      <Typography variant="h6">{score} Pontos</Typography>

      {showAnswer && (
        <Box sx={{ marginTop: '20px' }}>
          {selectedOption === questions[currentQuestion].correct ? (
            <Typography variant="body1" color="success.main">
              Correto! <CheckIcon />
            </Typography>
          ) : (
            <Typography variant="body1" color="error.main">
              Incorreto <CloseIcon />
            </Typography>
          )}

          <Typography variant="body2" sx={{ marginTop: '10px' }}>
            {questions[currentQuestion].justification}
          </Typography>

          {currentQuestion < questions.length - 1 ? (
            <Button onClick={nextQuestion} variant="contained" sx={{ marginTop: '20px' }}>
              Próxima Pergunta
            </Button>
          ) : (
            <Typography variant="h5" sx={{ marginTop: '20px' }}>
              Quiz Finalizado! Pontuação: {score} de {questions.length}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Quiz;