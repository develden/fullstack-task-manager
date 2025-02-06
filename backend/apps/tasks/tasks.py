from celery import shared_task
from .models import Task
import time
import logging

logger = logging.getLogger(__name__)

@shared_task
def process_task(task_id):
    try:
        task = Task.objects.get(id=task_id)
        # Симуляция начала долгой обработки
        task.status = 'in_progress'
        task.save()
        logger.info(f"Task {task.id} processing started.")
        time.sleep(5)  # Имитируем долгую операцию (например, вычисления или интеграцию)
        task.status = 'completed'
        task.save()
        logger.info(f"Task {task.id} processing completed.")
    except Task.DoesNotExist:
        pass 