# Консольний додаток з управління контактами: додавай, видаляй та переглядай свої контакти, виконуючи вказані команди у терміналі. 

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

![1__listContacts](https://github.com/OIgaB/goit-node.js-hw-01-CLI-app/assets/57020231/70b91cfc-9495-4f83-b333-835595d1476e)

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

![2__getContactById](https://github.com/OIgaB/goit-node.js-hw-01-CLI-app/assets/57020231/11882e8d-62c6-4e12-a73f-8bccdf49aea1)

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

![3__addContact](https://github.com/OIgaB/goit-node.js-hw-01-CLI-app/assets/57020231/eab68bdb-15c0-4959-b349-5ef2274168ce)

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

![4__removeContact](https://github.com/OIgaB/goit-node.js-hw-01-CLI-app/assets/57020231/addb8de2-6c08-42f5-a24c-3f4e46c74e7e)
