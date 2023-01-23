// @ts-nocheck
import './style.css';
import { header, main } from './modules/createPage';
import { refreshTable } from './modules/table';
import modalCreateClient from './modules/modalCreateClient';
import { getClients } from './modules/api';

(async () => {
  const { headerElement, search } = header();
  document.body.appendChild(headerElement);

  const {
    mainElement,
    addClientBtn,
    tableBody,
    thHeadId,
    thHeadName,
    thHeadDateCreate,
    thHeadDateUpdate,
  } = main();

  const clients = await getClients();

  if (clients) {
    refreshTable(
      clients.sort((a, b) => a.id - b.id),
      tableBody,
      mainElement,
      thHeadId
    );
  }

  // Поиск
  let timeout;
  search.addEventListener('input', () => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const newClients = await getClients();

      document
        .querySelector('.table__title-sort--active')
        .classList.remove('table__title-sort--active');

      thHeadId.classList.add('table__title-sort--active');

      const filterClients = newClients.filter((item) => {
        for (const key in item) {
          if (Object.hasOwnProperty.call(item, key)) {
            let element = item[key];

            if (key === 'updatedAt' || key === 'createdAt') {
              element = new Date(element).toLocaleString().split(',').join('');
            }

            if (element.toString().includes(search.value)) {
              return true;
            }
          }
        }

        return false;
      });

      refreshTable(
        filterClients.sort((a, b) => a.id - b.id),
        tableBody,
        mainElement,
        thHeadId
      );
    }, 300);
  });

  // Сортировка по ID
  thHeadId.addEventListener('click', async () => {
    thHeadId.classList.toggle('table__title-sort--bottom');

    document
      .querySelector('.table__title-sort--active')
      .classList.remove('table__title-sort--active');

    thHeadId.classList.add('table__title-sort--active');

    const newClients = await getClients();

    if (thHeadId.classList.value.includes('table__title-sort--bottom')) {
      refreshTable(
        newClients.sort((a, b) => a.id - b.id),
        tableBody,
        mainElement,
        thHeadId
      );
    } else {
      refreshTable(
        newClients.sort((a, b) => b.id - a.id),
        tableBody,
        mainElement,
        thHeadId
      );
    }
  });

  // Сортировка по ФИО
  thHeadName.addEventListener('click', async () => {
    thHeadName.classList.toggle('table__title-sort--bottom');

    document
      .querySelector('.table__title-sort--active')
      .classList.remove('table__title-sort--active');

    thHeadName.classList.add('table__title-sort--active');

    const newClients = await getClients();

    if (thHeadName.classList.value.includes('table__title-sort--bottom')) {
      refreshTable(
        newClients.sort((a, b) =>
          `${a.surname} ${a.name} ${a.lastName}`.localeCompare(
            `${b.surname} ${b.name} ${b.lastName}`
          )
        ),
        tableBody,
        mainElement,
        thHeadId
      );
    } else {
      refreshTable(
        newClients.sort((a, b) =>
          `${b.surname} ${b.name} ${b.lastName}`.localeCompare(
            `${a.surname} ${a.name} ${a.lastName}`
          )
        ),
        tableBody,
        mainElement,
        thHeadId
      );
    }
  });

  // Сортировка по дате создания
  thHeadDateCreate.addEventListener('click', async () => {
    thHeadDateCreate.classList.toggle('table__title-sort--bottom');

    document
      .querySelector('.table__title-sort--active')
      .classList.remove('table__title-sort--active');

    thHeadDateCreate.classList.add('table__title-sort--active');

    const newClients = await getClients();

    if (
      thHeadDateCreate.classList.value.includes('table__title-sort--bottom')
    ) {
      refreshTable(
        newClients.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
        tableBody,
        mainElement,
        thHeadId
      );
    } else {
      refreshTable(
        newClients.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        ),
        tableBody,
        mainElement,
        thHeadId
      );
    }
  });

  // Сортировка по дате изменения
  thHeadDateUpdate.addEventListener('click', async () => {
    thHeadDateUpdate.classList.toggle('table__title-sort--bottom');

    document
      .querySelector('.table__title-sort--active')
      .classList.remove('table__title-sort--active');

    thHeadDateUpdate.classList.add('table__title-sort--active');

    const newClients = await getClients();

    if (
      thHeadDateUpdate.classList.value.includes('table__title-sort--bottom')
    ) {
      refreshTable(
        newClients.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        ),
        tableBody,
        mainElement,
        thHeadId
      );
    } else {
      refreshTable(
        newClients.sort(
          (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
        ),
        tableBody,
        mainElement,
        thHeadId
      );
    }
  });

  addClientBtn.addEventListener('click', () => {
    modalCreateClient(mainElement, tableBody, thHeadId);
  });

  document.body.appendChild(mainElement);
})();
