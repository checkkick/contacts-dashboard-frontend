import './style.css';
import { header, main } from './modules/createPage';
import { refreshTable } from './modules/table';
import modalCreateClient from './modules/modalCreateClient';
import { getClients } from './modules/api';

(async () => {
  const { headerElement, search } = header();
  document.body.appendChild(headerElement);

  const { mainElement, addClientBtn, tableBody } = main();

  const clients = await getClients();

  if (clients) {
    refreshTable(clients, tableBody, mainElement);
  }

  let timeout;
  search.addEventListener('input', () => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const newClients = await getClients();

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

      refreshTable(filterClients, tableBody, mainElement);
    }, 300);
  });

  addClientBtn.addEventListener('click', () => {
    modalCreateClient(mainElement, tableBody);
  });

  document.body.appendChild(mainElement);
})();
