/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function findCommonElements(array1, array2) {
    const common = []
    for (let i = 0; i < array1.length; i++) {
        if (includesElement(array2, array1[i])) {
            common.push(array1[i])
        }
    }
    return common
}