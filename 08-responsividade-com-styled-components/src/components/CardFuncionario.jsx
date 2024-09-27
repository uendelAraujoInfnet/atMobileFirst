import React, { useState } from 'react';
import styled from 'styled-components';
// Importando ícones do MUI
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media(min-width: 768px){
    flex-direction: row;
    max-width: 100%;
  }
`;

const ImageSection = styled.div`
  background: #f4f4f4;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const InfoSection = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 16px;
  flex: 1;
  min-width: 15%;

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
  flex: 1;

  .icon {
    font-size: 24px;
    cursor: pointer;
  }

  @media(min-width: 768px){
    flex-direction: column;
    max-width: 100%;
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
        <h2>Nome: Uendel Ives</h2>
        <p>Nascimento: 1993 / 07 / 02</p>
        <p>Setor: Front End</p>
        <p>Crago: Estudante</p>
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
