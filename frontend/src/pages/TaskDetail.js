import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tasks/${id}/`)
      .then(response => {
        setTask(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Container>Загрузка...</Container>;
  if (error) return <Container>Ошибка: {error}</Container>;

  return (
    <Container>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p><strong>Статус:</strong> {task.status}</p>
      <Link to="/">Вернуться назад</Link>
    </Container>
  );
}

export default TaskDetail; 