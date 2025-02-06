import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './store/features/tasksSlice';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import styled from 'styled-components';
import TaskChart from './components/TaskChart';

const Container = styled.div`
  padding: 20px;
`;

function App() {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Container>
      <Header title="Task Manager" />
      <TaskForm />
      <h2>Задачи</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <a href={`/task/${task.id}`}>
              <strong>{task.title}</strong>
            </a> - {task.status}
          </li>
        ))}
      </ul>
      <TaskChart />
    </Container>
  );
}

export default App; 