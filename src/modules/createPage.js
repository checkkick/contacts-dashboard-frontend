function createTable() {
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

  tableHead.append(trHead);

  table.append(tableHead);
  table.append(tableBody);

  return { table, tableBody };
}

export function header() {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');

  const container = document.createElement('div');
  container.classList.add('container', 'header__row');

  const logo = document.createElement('a');
  logo.href = '#';
  logo.textContent = 'skb.';
  logo.classList.add('header__logo');

  const search = document.createElement('input');
  search.placeholder = 'Введите запрос';
  search.classList.add('header__search');

  container.append(logo);
  container.append(search);
  headerElement.append(container);

  return headerElement;
}

export function main() {
  const mainElement = document.createElement('main');
  mainElement.classList.add('main');

  const container = document.createElement('div');
  container.classList.add('container', 'main__column');

  const title = document.createElement('h1');
  title.textContent = 'Клиенты';
  title.classList.add('main__title');

  const { table, tableBody } = createTable();

  const addClientBtn = document.createElement('button');
  addClientBtn.innerHTML =
    '<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill="#9873FF"/></svg>';
  addClientBtn.classList.add('add-button');

  const buttonTitle = document.createElement('p');
  buttonTitle.textContent = 'Добавить клиента';
  buttonTitle.classList.add('add-button__title');

  addClientBtn.append(buttonTitle);

  container.append(title);
  container.append(table);
  container.append(addClientBtn);
  mainElement.append(container);

  return { mainElement, tableBody, addClientBtn };
}
