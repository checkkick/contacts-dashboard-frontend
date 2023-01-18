import './style.css';
import { header, main } from './modules/createPage';
import { refreshTable } from './modules/table';
import modalCreateClient from './modules/modalCreateClient';
import { getClients } from './modules/api';

(async () => {
  document.body.appendChild(header());

  const { mainElement, addClientBtn, tableBody } = main();
  const { modalAddClient } = modalCreateClient();

  const clients = await getClients();

  if (clients) {
    refreshTable(clients, tableBody, mainElement);
  }

  addClientBtn.addEventListener('click', () => {
    modalAddClient.style.display = 'flex';
  });

  mainElement.append(modalAddClient);
  document.body.appendChild(mainElement);
})();
