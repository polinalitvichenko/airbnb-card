import { Modal } from "./modal.js";

export const modalCreate = () => {

  const { modalTitle, modalBtn, modalContainer } = Modal();

  // деструктуризация (вместо названия переменной ставим скобки в зависимости от того, что возвращает функция (массив или объект)) вытащить из объекта что-то
  modalTitle.textContent = 'Create House';
  modalBtn.textContent = 'Create';

  // при клике на фон окно исчезает
  document.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
      modalContainer.remove()
    }

  })

  document.body.append(modalContainer);
}