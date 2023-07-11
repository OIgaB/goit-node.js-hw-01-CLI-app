import yargs from 'yargs';  // ES-6-ті модулі 
// const argv = require('yargs').argv;   // Common.js
import contactsService from './contacts.js'; 


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      console.table(allContacts);
      break;

    case 'get':
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;

    case 'add':
      const newContact = await contactsService.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case 'remove':
      const deleteContact = await contactsService.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const { argv } = yargs(process.argv.slice(2)); // об'єкт, в якому є ключ і його значення - action: 'list' 

invokeAction(argv); // виклик ф-ції з тим, що написав в консолі користувач