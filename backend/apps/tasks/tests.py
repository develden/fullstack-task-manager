from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Task

class TaskAPITestCase(APITestCase):
    def test_create_task(self):
        url = reverse('task-list')
        data = {
            'title': 'Test Task',
            'description': 'This is a test task.'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 1)
        task = Task.objects.first()
        self.assertEqual(task.title, 'Test Task')

    def test_get_tasks(self):
        Task.objects.create(title='Task 1', description='Desc 1')
        url = reverse('task-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) > 0)

    def test_filter_tasks_by_status(self):
        Task.objects.create(title='Task 1', description='Desc 1', status='pending')
        Task.objects.create(title='Task 2', description='Desc 2', status='completed')
        url = reverse('task-list') + '?status=pending'
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for task in response.data:
            self.assertEqual(task['status'], 'pending') 