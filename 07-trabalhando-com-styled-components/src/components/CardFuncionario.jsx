import React, { useState } from 'react';
import styled from 'styled-components';
// Importando ícones do MUI
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageSection = styled.div`
  background: #f4f4f4;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoSection = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 16px;

  h2 {
    margin: 0;
    font-size: 22px;
  }

  p {
    margin: 4px 0;
    color: #555;
  }
`;

const IconSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background: #eee;

  .icon {
    font-size: 24px;
    cursor: pointer;
  }
`;

const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  input {
    margin: 0;
    transform: scale(1.2);
  }
`;

const tasksInitial = [
  { id: 1, taskName: 'Finalizar AT de Fundamentos de React', completed: true },
  { id: 2, taskName: 'Finalizar AT de Mobile First', completed: false },
  { id: 3, taskName: 'Finalizar TP de Projeto de Blocos', completed: false }
];

const CardFuncionario = () => {
  const [tasks, setTasks] = useState(tasksInitial);

  const handleCheckboxChange = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <CardContainer>
      <ImageSection>
        <img src='https://static.vecteezy.com/system/resources/previews/030/769/008/non_2x/innovative-computer-man-online-blogger-generate-ai-photo.jpg' width='250px'/>
        
      </ImageSection>
      <InfoSection>
        <h2>Uendel Ives</h2>
        <p>1993 / 07 / 02</p>
        <p>Front End</p>
        <p>Estudante</p>
      </InfoSection>
      <IconSection>
        <PhoneIcon className="icon" />
        <EmailIcon className="icon" />
        <LocationOnIcon className="icon" />
      </IconSection>
      <TaskTable>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Tarefas</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                />
              </td>
              <td>{task.taskName}</td>
            </tr>
          ))}
        </tbody>
      </TaskTable>
    </CardContainer>
  );
};

export default CardFuncionario;
