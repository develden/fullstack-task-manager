import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

function TaskChart() {
  const { tasks } = useSelector((state) => state.tasks);

  const pendingCount = tasks.filter(task => task.status === 'pending').length;
  const inProgressCount = tasks.filter(task => task.status === 'in_progress').length;
  const completedCount = tasks.filter(task => task.status === 'completed').length;

  const data = {
    labels: ['Pending', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [pendingCount, inProgressCount, completedCount],
        backgroundColor: ['#f1c40f', '#3498db', '#2ecc71'],
      },
    ],
  };

  return (
    <div>
      <h3>Статистика задач</h3>
      <Pie data={data} />
    </div>
  );
}

export default TaskChart; 