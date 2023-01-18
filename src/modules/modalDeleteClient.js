export default function modalDeleteClient() {
  const modalRemoveClient = document.createElement('div');
  modalRemoveClient.classList.add('modal-background');

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-remove');

  const closeModal = document.createElement('button');
  closeModal.classList.add('modal__close');
  modalWindow.append(closeModal);

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('modal-remove__title');
  modalTitle.textContent = 'Удалить клиента';
  modalWindow.append(modalTitle);

  const modalText = document.createElement('p');
  modalText.classList.add('modal-remove__text');
  modalText.textContent = 'Вы действительно хотите удалить данного клиента?';
  modalWindow.append(modalText);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Удалить';

  modalWindow.append(removeBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.textContent = 'Отмена';
  modalWindow.append(cancelBtn);

  modalRemoveClient.append(modalWindow);

  return {
    modalRemoveClient,
    removeBtn,
    closeModal,
    cancelBtn,
  };
}
