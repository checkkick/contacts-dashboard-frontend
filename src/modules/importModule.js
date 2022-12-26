export default function newComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello';
  element.classList.add('hello', 'container');

  return element;
}
