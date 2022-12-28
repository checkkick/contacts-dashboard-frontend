import './style.css';
import { header, main } from './modules/createPage';
// import { getClients } from './modules/api';

(async () => {
  document.body.appendChild(header());

  const { mainElement } = main();

  // const allClients = await getClients();

  document.body.appendChild(mainElement);
})();
