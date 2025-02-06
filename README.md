# fullstack-task-manager

Полноценный full‑stack проект с использованием Django, Celery, React, Redux, Styled Components и Docker, демонстрирующий современные подходы к созданию масштабируемых веб‑приложений.

Этот проект демонстрирует мои навыки в разработке на всех уровнях:
- **Backend:** Django, Django REST Framework, Celery для асинхронных задач (с использованием Redis).
- **Frontend:** React, Redux Toolkit для управления состоянием, Styled Components для стилизации, тестирование с Jest и React Testing Library.
- **DevOps:** Docker и docker-compose для контейнеризации и оркестрации приложения.

## Архитектура проекта

Проект состоит из следующих компонентов:
- **Backend:** Реализован с помощью Django + DRF. В нем реализована фильтрация задач по статусу и асинхронная обработка через Celery.
- **Frontend:** Интерфейс на React, использующий Redux для управления состоянием и React Router для маршрутизации (например, страница деталей задачи).
- **Брокер сообщений:** Redis используется в качестве брокера для Celery.
- **Контейнеризация:** Docker и docker-compose для сборки и развертывания всех сервисов.

## Документация API

API поддерживает следующие возможности:

- **Получение всех задач:**  
  `GET http://localhost:8000/api/tasks/`

- **Фильтрация задач по статусу:**  
  Например, для получения только ожидающих выполнения задач:  
  `GET http://localhost:8000/api/tasks/?status=pending`

- **Создание задачи:**  
  `POST http://localhost:8000/api/tasks/`  
  Пример передаваемых данных:
  ```json
  {
    "title": "Название задачи",
    "description": "Описание задачи"
  }
  ```

- **Получение деталей задачи:**  
  `GET http://localhost:3000/task/1`  
  (детали задачи отображаются на отдельной странице с маршрутизацией через React Router).

Для интерактивного изучения API можно добавить Swagger или drf-yasg (в данном проекте этот функционал пока отсутствует, но легко интегрируется).

## Инструкции по развёртыванию

1. Убедитесь, что Docker и Docker Compose установлены.
2. В корне проекта выполните команду:
   ```
   docker-compose up --build
   ```
3. После сборки:
   - Backend будет доступен по адресу [http://localhost:8000](http://localhost:8000).
   - Frontend — по адресу [http://localhost:3000](http://localhost:3000).

## Тестирование

### Backend
Перейдите в контейнер backend и выполните:
```
python manage.py test
```

### Frontend
В директории `frontend` выполните:
```
npm test
```

## Рекомендации по commit-сообщениям

Для поддержания чистоты истории изменений используйте [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

- `feat:` для добавления новых возможностей (например, `feat: добавлена фильтрация задач по статусу`).
- `fix:` для исправления ошибок (например, `fix: улучшено логирование в Celery задаче`).
- `docs:` для изменений в документации (например, `docs: обновлен README с информацией по API`).

## Дополнительный функционал

- **Маршрутизация и страница деталей:**  
  Для просмотра деталей задачи перейдите по адресу, например:
  ```
  http://localhost:3000/task/1
  ```

- **Аналитика:**  
  На главной странице отображается диаграмма с распределением задач по статусу.

Эти улучшения демонстрируют не только технический арсенал (работа с Django, Celery, React, Redux, Docker), но и хороший подход к организации проекта, документированию и поддержке качества кода.

---

*Рекомендуется продолжать расширять покрытие тестами, интегрировать Swagger для автоматизированной документации API, а также рассмотреть добавление безопасности через JWT или OAuth для реальных продакшен-решений.*
