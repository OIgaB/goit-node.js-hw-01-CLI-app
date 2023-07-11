Консольний додаток (Command Line Interface, CLI) з управління контактами: додавай, видаляй та переглядай свої контакти, виконуючи вказані команди у терміналі:
ES-6

Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
команда: node index.js --action="list"

1__listContacts

Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
команда: node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

2__getContactById

Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
команда: node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

3__addContact

Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
команда: node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

4__removeContact