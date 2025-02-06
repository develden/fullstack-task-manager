import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createTask } from '../store/features/tasksSlice';

const FormContainer = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #27ae60;
  color: white;
  border: none;
  cursor: pointer;
`;

function TaskForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(createTask({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        rows="4"
        placeholder="Описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Добавить задачу</Button>
    </FormContainer>
  );
}

export default TaskForm; 