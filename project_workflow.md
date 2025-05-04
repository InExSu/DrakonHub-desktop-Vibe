```mermaid
graph TD
    A[Загрузка приложения] --> B[Инициализация конфигурации]
    B -->|client_config.js| C[Загрузка локализации]
    C -->|localization.js| D[Инициализация редактора]
    D -->|drcore.js| E[Загрузка библиотек]
    E -->|quill2.min.js, mousetrap.min.js| F[Создание холста]
    F -->|drakon_canvas.js| G[Инициализация виджетов]
    G -->|drakonhubwidget_10.js| H[Готовность к работе]
    
    subgraph Пользовательские действия
        H -->|launcher.js| I[Создание диаграммы]
        I -->|edit_tools.js| J[Редактирование элементов]
        J -->|http_0_1.js| K[Сохранение проекта]
        K -->|utils.js| L[Экспорт диаграммы]
    end
    
    subgraph Системные процессы
        M[Обработка ошибок] -->|utils.js| N[Логирование]
        O[Обновление интерфейса] -->|simplewidgets_0_1.js| P[Рендеринг]
    end
    ```