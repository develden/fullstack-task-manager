# Используем официальный образ Python
FROM python:3.9-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости
COPY requirements.txt /app/requirements.txt

# Устанавливаем зависимости
RUN pip install --upgrade pip && pip install -r requirements.txt

# Копируем весь проект в контейнер
COPY . /app

# Применяем миграции (при первом запуске можно убрать или заменить команду на entrypoint script)
RUN python manage.py migrate

# Открываем порт
EXPOSE 8000

# Запускаем сервер через Gunicorn
CMD ["gunicorn", "project.wsgi:application", "--bind", "0.0.0.0:8000"] 