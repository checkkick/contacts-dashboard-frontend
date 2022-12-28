export default function modalCreateClient() {
  const modalAddClient = document.createElement('div');
  modalAddClient.classList.add('modal-background');

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('modal__title');
  modalTitle.textContent = 'Новый клиент';
  modalWindow.append(modalTitle);

  const surname = document.createElement('input');
  surname.classList.add('modal__input');
  surname.placeholder = 'Фамилия*';
  modalWindow.append(surname);

  const name = document.createElement('input');
  name.classList.add('modal__input');
  name.placeholder = 'Имя*';
  modalWindow.append(name);

  const secondname = document.createElement('input');
  secondname.classList.add('modal__input');
  secondname.placeholder = 'Отчество';
  modalWindow.append(secondname);

  // Функция очистки полей и скрытия модального окна
  function hideModalAddClient() {
    modalAddClient.style.display = 'none';
    surname.value = '';
    name.value = '';
    secondname.value = '';
  }

  hideModalAddClient();

  const addContact = document.createElement('button');
  addContact.classList.add('add-contact-btn');
  addContact.innerHTML =
    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99998 3.66659C6.63331 3.66659 6.33331 3.96659 6.33331 4.33325V6.33325H4.33331C3.96665 6.33325 3.66665 6.63325 3.66665 6.99992C3.66665 7.36659 3.96665 7.66659 4.33331 7.66659H6.33331V9.66659C6.33331 10.0333 6.63331 10.3333 6.99998 10.3333C7.36665 10.3333 7.66665 10.0333 7.66665 9.66659V7.66659H9.66665C10.0333 7.66659 10.3333 7.36659 10.3333 6.99992C10.3333 6.63325 10.0333 6.33325 9.66665 6.33325H7.66665V4.33325C7.66665 3.96659 7.36665 3.66659 6.99998 3.66659ZM6.99998 0.333252C3.31998 0.333252 0.333313 3.31992 0.333313 6.99992C0.333313 10.6799 3.31998 13.6666 6.99998 13.6666C10.68 13.6666 13.6666 10.6799 13.6666 6.99992C13.6666 3.31992 10.68 0.333252 6.99998 0.333252ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.93992 1.66665 6.99992C1.66665 4.05992 4.05998 1.66659 6.99998 1.66659C9.93998 1.66659 12.3333 4.05992 12.3333 6.99992C12.3333 9.93992 9.93998 12.3333 6.99998 12.3333Z" fill="#9873FF"/></svg>';
  const btnTitle = document.createElement('p');
  btnTitle.classList.add('add-contact-btn__title');
  btnTitle.textContent = 'Добавить контакт';
  addContact.append(btnTitle);
  modalWindow.append(addContact);

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save-btn');
  saveBtn.textContent = 'Сохранить';
  modalWindow.append(saveBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.textContent = 'Отмена';
  cancelBtn.addEventListener('click', hideModalAddClient);
  modalWindow.append(cancelBtn);

  const closeModal = document.createElement('button');
  closeModal.classList.add('modal__close');
  closeModal.addEventListener('click', hideModalAddClient);
  modalWindow.append(closeModal);

  modalAddClient.append(modalWindow);

  return { modalAddClient };
}
