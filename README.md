# Задачи на логику

Демо: [tasks](https://rom746.github.io/tasks/).

Для тестирования вводим в консоль:

    Вывод таблицы - printTable(10) 
    Получение отфильтрованного массива - getFilteredArray([1, 2, 12])
    Задача-игра склад и шары - getStaelBalls([100, 300, 200], 120)

## Вывод таблицы умножения в консоль

На вход метод получает число, до которого выводится таблица умножения. 

Выравнивание таблицы по правому краю.

## Метод фильтрации массива

На вход приходит массив чисел, после чего проходит фильтрацию:

    Сортировка
    Поиски совпадений
    Вывод в консоль
    Проверка условия останова
        Возврат массива
    Иначе
        Изменение порядка цифр в числе
        Возведение числа в квадрат
        Фильтрация полученного массива

## Задача-игра воровство шаров со склада

На вход приходит массив произвольной длины с текущим количеством шариков разных цветов и число со вместимостью мешков у воров (сколько шариков максимум могут унести воры).

На выходе массив той же длины с информацией, что украли.