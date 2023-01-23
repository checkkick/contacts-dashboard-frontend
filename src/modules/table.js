import tippy from 'tippy.js';
import modalDeleteClient from './modalDeleteClient';
import modalEditClient from './modalEditClient';
import { deleteClient, getClients, updateClient, getClientById } from './api';

import 'tippy.js/dist/tippy.css';

export function refreshTable(clients, tableBody, mainElement) {
  tableBody.innerHTML = '';

  if (clients.length > 0) {
    clients.forEach((item) => {
      const trTableBody = document.createElement('tr');
      trTableBody.classList.add('table__body-row');

      const tdTableBodyId = document.createElement('td');
      tdTableBodyId.classList.add('table__id');
      tdTableBodyId.textContent = item.id;

      trTableBody.append(tdTableBodyId);

      const tdTableBodyName = document.createElement('td');
      tdTableBodyName.classList.add('table__name');
      tdTableBodyName.textContent = `${item.surname} ${item.name} ${item.lastName}`;

      trTableBody.append(tdTableBodyName);

      const tdTableBodyCreated = document.createElement('td');
      tdTableBodyCreated.classList.add('table__date');
      tdTableBodyCreated.textContent = new Date(
        item.createdAt
      ).toLocaleDateString();

      const tdTableBodyCreatedTime = document.createElement('span');
      tdTableBodyCreatedTime.classList.add('table__time');
      tdTableBodyCreatedTime.textContent = new Date(
        item.createdAt
      ).toLocaleTimeString();

      tdTableBodyCreated.append(tdTableBodyCreatedTime);
      trTableBody.append(tdTableBodyCreated);

      const tdTableBodyUpdated = document.createElement('td');
      tdTableBodyUpdated.classList.add('table__date');
      tdTableBodyUpdated.textContent = new Date(
        item.updatedAt
      ).toLocaleDateString();

      const tdTableBodyUpdatedTime = document.createElement('span');
      tdTableBodyUpdatedTime.classList.add('table__time');
      tdTableBodyUpdatedTime.textContent = new Date(
        item.updatedAt
      ).toLocaleTimeString();

      tdTableBodyUpdated.append(tdTableBodyUpdatedTime);
      trTableBody.append(tdTableBodyUpdated);

      const tdTableBodyContacts = document.createElement('td');
      tdTableBodyContacts.classList.add('table__contacts');

      for (const iterator of item.contacts) {
        const contact = document.createElement('div');
        contact.classList.add('table__contact-item');

        switch (iterator.type) {
          case 'Email':
            tippy(contact, { content: `Email: ${iterator.value}` });
            contact.innerHTML =
              '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/></svg>';
            break;

          case 'Телефон':
            tippy(contact, { content: `Телефон: ${iterator.value}` });
            contact.innerHTML =
              '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><circle cx="8" cy="8" r="8" fill="#9873FF"/><path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>';
            break;

          case 'Доп. телефон':
            tippy(contact, { content: `Доп. телефон: ${iterator.value}` });
            contact.innerHTML =
              '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><circle cx="8" cy="8" r="8" fill="#9873FF"/><path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>';
            break;

          case 'Vk':
            tippy(contact, { content: `VK: ${iterator.value}` });
            contact.innerHTML =
              '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/></svg>';
            break;

          case 'Facebook':
            tippy(contact, { content: `Facebook: ${iterator.value}` });
            contact.innerHTML =
              '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/></g></svg>';
            break;

          default:
            break;
        }

        tdTableBodyContacts.append(contact);
      }

      trTableBody.append(tdTableBodyContacts);

      const tdTableBodyButtons = document.createElement('td');
      tdTableBodyButtons.classList.add('table__buttons');

      const editButton = document.createElement('button');
      editButton.classList.add('table__edit-button');
      editButton.textContent = 'Изменить';

      async function updateTableClients() {
        const newClients = await getClients();
        refreshTable(newClients, tableBody, mainElement);
      }

      function openRemoveModalWindow() {
        const { modalRemoveClient, removeBtn, closeModal, cancelBtn } =
          modalDeleteClient();

        mainElement.append(modalRemoveClient);

        function closeModalRemove() {
          mainElement.removeChild(modalRemoveClient);
        }
        closeModal.addEventListener('click', closeModalRemove);
        cancelBtn.addEventListener('click', closeModalRemove);

        removeBtn.addEventListener('click', async () => {
          await deleteClient(item.id);

          await updateTableClients();
          closeModalRemove();
        });
      }

      editButton.addEventListener('click', async () => {
        const clientDataById = await getClientById(item.id);

        const {
          modalEditClientWindow,
          saveBtn,
          deleteBtn,
          closeModal,
          inputData,
        } = modalEditClient(clientDataById);

        mainElement.append(modalEditClientWindow);

        function closeModalEditClient() {
          mainElement.removeChild(modalEditClientWindow);
        }

        saveBtn.addEventListener('click', async () => {
          const newData = {};

          const newContacts = inputData.contacts.map((contactItem) => ({
            type: contactItem.type,
            value: contactItem.value,
          }));

          if (inputData.name.value !== item.name) {
            newData.name = inputData.name.value;
          }
          if (inputData.surname.value !== item.surname) {
            newData.surname = inputData.surname.value;
          }
          if (inputData.lastName.value !== item.lastName) {
            newData.lastName = inputData.lastName.value;
          }
          if (JSON.stringify(newContacts) !== JSON.stringify(item.contacts)) {
            newData.contacts = newContacts;
          }

          if (Object.keys(newData).length > 0) {
            await updateClient(item.id, newData);
            await updateTableClients();
            closeModalEditClient();
          }
        });

        closeModal.addEventListener('click', closeModalEditClient);

        deleteBtn.addEventListener('click', () => {
          closeModalEditClient();
          openRemoveModalWindow();
        });
      });

      tdTableBodyButtons.append(editButton);

      const removeButton = document.createElement('button');
      removeButton.classList.add('table__remove-button');
      removeButton.textContent = 'Удалить';
      removeButton.addEventListener('click', openRemoveModalWindow);

      tdTableBodyButtons.append(removeButton);

      trTableBody.append(tdTableBodyButtons);

      tableBody.append(trTableBody);
    });
  } else {
    const trTableBody = document.createElement('tr');
    trTableBody.classList.add('table__body-row');

    const tdTableBody = document.createElement('td');
    tdTableBody.classList.add('table__body-empty');
    tdTableBody.colSpan = 6;

    trTableBody.append(tdTableBody);

    tableBody.append(trTableBody);
  }
}

export function createTable() {
  const table = document.createElement('table');
  table.classList.add('table');

  const tableHead = document.createElement('thead');
  tableHead.classList.add('table__header');

  const trHead = document.createElement('tr');
  trHead.classList.add('table__head-row');

  const thHeadFirst = document.createElement('th');
  thHeadFirst.classList.add('table__title');
  thHeadFirst.textContent = 'ID';
  tableHead.append(thHeadFirst);

  const thHeadSecond = document.createElement('th');
  thHeadSecond.classList.add('table__title');
  thHeadSecond.textContent = 'Фамилия Имя Отчество';
  tableHead.append(thHeadSecond);

  const thHeadThird = document.createElement('th');
  thHeadThird.classList.add('table__title');
  thHeadThird.textContent = 'Дата и время создания';
  tableHead.append(thHeadThird);

  const thHeadFourth = document.createElement('th');
  thHeadFourth.classList.add('table__title');
  thHeadFourth.textContent = 'Последние изменения';
  tableHead.append(thHeadFourth);

  const thHeadFifth = document.createElement('th');
  thHeadFifth.classList.add('table__title');
  thHeadFifth.textContent = 'Контакты';
  tableHead.append(thHeadFifth);

  const thHeadSixth = document.createElement('th');
  thHeadSixth.classList.add('table__title');
  thHeadSixth.textContent = 'Действия';
  tableHead.append(thHeadSixth);

  const tableBody = document.createElement('tbody');
  tableBody.classList.add('table__body');

  const trTableBody = document.createElement('tr');
  trTableBody.classList.add('table__body-row');

  const tdTableBody = document.createElement('td');
  tdTableBody.classList.add('table__body-loading');
  tdTableBody.colSpan = 6;

  const loader = document.createElement('span');
  loader.innerHTML =
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C17.6755 2 15.454 2.4405 13.414 3.243" stroke="#9873FF" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/></svg>';
  loader.classList.add('table__loader');

  tdTableBody.append(loader);
  trTableBody.append(tdTableBody);
  tableBody.append(trTableBody);

  tableHead.append(trHead);

  table.append(tableHead);
  table.append(tableBody);

  return { table, tableBody };
}
