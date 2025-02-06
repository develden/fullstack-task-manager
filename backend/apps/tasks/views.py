from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from .tasks import process_task

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = Task.objects.all().order_by('-created_at')
        status_param = self.request.query_params.get('status')
        if status_param:
            queryset = queryset.filter(status=status_param)
        return queryset

    def perform_create(self, serializer):
        """
        Создает задачу и инициирует ее асинхронную обработку через Celery.
        """
        task = serializer.save()
        process_task.delay(task.id) 