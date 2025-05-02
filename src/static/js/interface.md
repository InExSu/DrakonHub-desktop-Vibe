основные файлы и функции, формирующие интерфейс программы DrakonHub. На основе предоставленного кода я вижу следующие ключевые компоненты:

```mermaid
---
config:
  layout: elk
---
flowchart TD
    A["Основные файлы интерфейса"] --> B["drcore.js"] & C["dh2common.js"] & D["standalone.js"] & E["preload.js"] & F["main.js"]
    B --> G["Функции управления интерфейсом"]
    G --> G1["New Window"] & G2["To Diagram"] & G3["Close File"] & G4["Save As File"] & G5["Start Open File"]
    C --> H["Функции общего назначения"]
    H --> H1["Choose Document Type"] & H2["Show Wait Block"] & H3["Hide Wait Block"]
    D --> I["Функции автономного режима"]
    I --> I1["Open File At"] & I2["Get Path"] & I3["Save My File"]
    E --> J["Электрон API"]
    J --> J1["Set Clipboard"] & J2["Save As Png"] & J3["Create Diagram"] & J4["New Window"]
    F --> K["Основные функции"]
    K --> K1["Create Diagram"] & K2["Find Diagram"] & K3["Open File At"]


```

Основные файлы интерфейса:

1. **drcore.js** (`/src/static/js/drcore.js`) - содержит основные функции управления интерфейсом  
   - `newWindow()` - создание нового окна  
   - `toDiagram()` - переход к диаграмме  
   - `closeFile()` - закрытие файла  

2. **dh2common.js** (`/src/static/js/dh2common.js`) - общие функции интерфейса  
3. **standalone.js** (`/src/static/js/standalone.js`) - функции автономного режима  
4. **preload.js** (`/src/preload.js`) - мост между Electron и интерфейсом  
5. **main.js** (`/src/main.js`) - основные функции приложения

Для добавления новых панелей вам нужно будет работать в основном с файлом drcore.js, который содержит основные функции управления интерфейсом.

        