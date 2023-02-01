import Choices from 'choices.js';
import 'choices.js/src/styles/choices.scss';

let IdCounter = 0;
let contactsArray = [];

function createContact(data = {}) {
  IdCounter += 1;

  const contact = document.createElement('div');
  contact.classList.add('new-contact');

  const selectContactType = document.createElement('select');
  selectContactType.classList.add('new-contact__select');

  const options = ['Телефон', 'Email', 'Vk', 'Facebook', 'Другое'];
  options.forEach((item) => {
    const optionElement = document.createElement('option');
    optionElement.textContent = item;
    selectContactType.options.add(optionElement);
  });

  contact.append(selectContactType);

  const choices = new Choices(selectContactType, {
    allowHTML: true,
    searchEnabled: false,
    placeholder: true,
    itemSelectText: '',
  });

  const inputContact = document.createElement('input');
  inputContact.classList.add('new-contact__input');
  inputContact.placeholder = 'Введите данные контакта';

  contact.append(inputContact);

  const deleteContact = document.createElement('button');
  deleteContact.classList.add('new-contact__delete');
  deleteContact.innerHTML =
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#B0B0B0"/></svg>';
  deleteContact.style.display = 'none';

  contact.append(deleteContact);

  const itemContact = {
    id: IdCounter,
    type: selectContactType.value,
    value: inputContact.value,
  };
  contactsArray.push(itemContact);

  const indexOfContact = contactsArray.findIndex(
    (n) => n.id === itemContact.id
  );

  // -------------------------------------------------------------
  // События
  selectContactType.addEventListener('change', () => {
    itemContact.type = selectContactType.value;
    contactsArray.splice(indexOfContact, 1, itemContact);
  });

  inputContact.addEventListener('change', () => {
    itemContact.value = inputContact.value;
    contactsArray.splice(indexOfContact, 1, itemContact);
  });

  inputContact.addEventListener('input', () => {
    if (inputContact.value.length !== 0) {
      deleteContact.style.display = 'block';
    } else {
      deleteContact.style.display = 'none';
    }
  });

  if (Object.keys(data).length > 0) {
    choices.setChoiceByValue(data.type);
    inputContact.value = data.value;

    itemContact.type = data.type;
    itemContact.value = data.value;

    deleteContact.style.display = 'block';
  }

  return { contact, indexOfContact, deleteContact };
}

// -------------------------------------------------------------
export default function modalEditClient(clientData) {
  contactsArray = [];

  const modalEditClientWindow = document.createElement('div');
  modalEditClientWindow.classList.add('modal-background');

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');

  const modalTitleBlock = document.createElement('div');
  modalTitleBlock.classList.add('modal__title-block');
  modalWindow.append(modalTitleBlock);

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('modal__title');
  modalTitle.textContent = 'Изменить данные';
  modalTitleBlock.append(modalTitle);

  const modalSubitle = document.createElement('h3');
  modalSubitle.classList.add('modal__subtitle');
  modalSubitle.textContent = `ID: ${clientData.id}`;
  modalTitleBlock.append(modalSubitle);

  const inputBlockSurname = document.createElement('div');
  inputBlockSurname.classList.add('modal__input-block');
  modalWindow.append(inputBlockSurname);

  const surname = document.createElement('input');
  surname.classList.add('modal__input');
  surname.id = 'surname';
  surname.value = clientData.surname;
  surname.required = true;
  inputBlockSurname.append(surname);

  const spanAccentLabelSurname = document.createElement('span');
  spanAccentLabelSurname.classList.add('modal__label-accent');
  spanAccentLabelSurname.textContent = '*';

  const surnameLabel = document.createElement('label');
  surnameLabel.classList.add('modal__label');
  surnameLabel.textContent = 'Фамилия';
  surnameLabel.htmlFor = 'surname';
  surnameLabel.append(spanAccentLabelSurname);
  inputBlockSurname.append(surnameLabel);

  const inputBlockName = document.createElement('div');
  inputBlockName.classList.add('modal__input-block');
  modalWindow.append(inputBlockName);

  const name = document.createElement('input');
  name.classList.add('modal__input');
  name.id = 'name';
  name.value = clientData.name;
  name.required = true;
  inputBlockName.append(name);

  const spanAccentLabelName = document.createElement('span');
  spanAccentLabelName.classList.add('modal__label-accent');
  spanAccentLabelName.textContent = '*';

  const nameLabel = document.createElement('label');
  nameLabel.classList.add('modal__label');
  nameLabel.textContent = 'Имя';
  nameLabel.htmlFor = 'name';
  nameLabel.append(spanAccentLabelName);
  inputBlockName.append(nameLabel);

  const inputBlockLastName = document.createElement('div');
  inputBlockLastName.classList.add('modal__input-block');
  modalWindow.append(inputBlockLastName);

  const lastName = document.createElement('input');
  lastName.classList.add('modal__input');
  lastName.id = 'name';
  lastName.value = clientData.lastName;
  lastName.required = true;
  inputBlockLastName.append(lastName);

  const lastNameLabel = document.createElement('label');
  lastNameLabel.classList.add('modal__label');
  lastNameLabel.textContent = 'Отчество';
  lastNameLabel.htmlFor = 'name';
  inputBlockLastName.append(lastNameLabel);

  const addContactContainer = document.createElement('div');
  addContactContainer.classList.add('contacts-container');

  const addContact = document.createElement('button');
  addContact.classList.add('add-contact-btn');
  addContact.innerHTML =
    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99998 3.66659C6.63331 3.66659 6.33331 3.96659 6.33331 4.33325V6.33325H4.33331C3.96665 6.33325 3.66665 6.63325 3.66665 6.99992C3.66665 7.36659 3.96665 7.66659 4.33331 7.66659H6.33331V9.66659C6.33331 10.0333 6.63331 10.3333 6.99998 10.3333C7.36665 10.3333 7.66665 10.0333 7.66665 9.66659V7.66659H9.66665C10.0333 7.66659 10.3333 7.36659 10.3333 6.99992C10.3333 6.63325 10.0333 6.33325 9.66665 6.33325H7.66665V4.33325C7.66665 3.96659 7.36665 3.66659 6.99998 3.66659ZM6.99998 0.333252C3.31998 0.333252 0.333313 3.31992 0.333313 6.99992C0.333313 10.6799 3.31998 13.6666 6.99998 13.6666C10.68 13.6666 13.6666 10.6799 13.6666 6.99992C13.6666 3.31992 10.68 0.333252 6.99998 0.333252ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.93992 1.66665 6.99992C1.66665 4.05992 4.05998 1.66659 6.99998 1.66659C9.93998 1.66659 12.3333 4.05992 12.3333 6.99992C12.3333 9.93992 9.93998 12.3333 6.99998 12.3333Z" fill="#9873FF"/></svg>';
  const btnTitle = document.createElement('p');
  btnTitle.classList.add('add-contact-btn__title');
  btnTitle.textContent = 'Добавить контакт';

  addContact.append(btnTitle);
  addContactContainer.append(addContact);
  modalWindow.append(addContactContainer);

  const errorBlock = document.createElement('div');
  errorBlock.classList.add('modal__error-block');
  modalWindow.append(errorBlock);

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save-btn');
  saveBtn.textContent = 'Сохранить';
  modalWindow.append(saveBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('cancel-btn');
  deleteBtn.textContent = 'Удалить клиента';
  modalWindow.append(deleteBtn);

  const closeModal = document.createElement('button');
  closeModal.classList.add('modal__close');
  modalWindow.append(closeModal);

  modalEditClientWindow.append(modalWindow);

  addContact.addEventListener('click', () => {
    const { contact, indexOfContact, deleteContact } = createContact();
    const item = addContactContainer.insertBefore(contact, addContact);

    deleteContact.addEventListener('click', () => {
      contactsArray.splice(indexOfContact, 1);
      addContactContainer.removeChild(item);

      console.log(contactsArray);

      if (contactsArray.length < 10) {
        saveBtn.style.display = 'block';
      }
    });

    if (contactsArray.length >= 10) {
      saveBtn.style.display = 'none';
    }
  });

  clientData.contacts.forEach((item) => {
    const { contact, indexOfContact, deleteContact } = createContact(item);
    const itemContact = addContactContainer.insertBefore(contact, addContact);

    deleteContact.addEventListener('click', () => {
      contactsArray.splice(indexOfContact, 1);
      addContactContainer.removeChild(itemContact);

      if (contactsArray.length < 10) {
        saveBtn.style.display = 'block';
      }
    });
  });

  const inputData = {
    name,
    surname,
    lastName,
    contacts: contactsArray,
  };

  return {
    modalEditClientWindow,
    saveBtn,
    deleteBtn,
    closeModal,
    inputData,
    errorBlock,
  };
}
