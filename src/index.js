import './style.css';
import { header, main } from './modules/createPage';
import { refreshTable } from './modules/table';
import modalCreateClient from './modules/modalCreateClient';
import { getClients } from './modules/api';

(async () => {
  document.body.appendChild(header());

  const { mainElement, addClientBtn, tableBody } = main();

  const clients = await getClients();

  if (clients) {
    refreshTable(clients, tableBody, mainElement);
  }

  addClientBtn.addEventListener('click', () => {
    modalCreateClient(mainElement, tableBody);
  });

  document.body.appendChild(mainElement);
})();
