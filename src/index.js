import './style.css';
import { header, main } from './modules/createPage';
import modalCreateClient from './modules/modalCreateClient';

(async () => {
  document.body.appendChild(header());

  const { mainElement, addClientBtn } = main();
  const { modalAddClient } = modalCreateClient();

  addClientBtn.addEventListener('click', () => {
    modalAddClient.style.display = 'flex';
  });

  mainElement.append(modalAddClient);
  document.body.appendChild(mainElement);
})();
