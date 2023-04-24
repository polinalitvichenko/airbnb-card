export const Sorting = () => {
  const sortingComponent = document.createElement('div');
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const sortingTitle = document.createElement('h4');
  const btnContainer = document.createElement('div');
  const priceBtn = document.createElement('button');
  const nameBtn = document.createElement('button');

  sortingComponent.classList.add('sorting');
  container.classList.add('container');
  wrapper.classList.add('sorting-wrapper');
  sortingTitle.classList.add('sortin__title');
  btnContainer.classList.add('btn-container');
  priceBtn.classList.add('price__btn', 'btn');
  nameBtn.classList.add('name__btn', 'btn');

  sortingTitle.textContent = 'Sorting by';
  priceBtn.textContent = 'price';
  nameBtn.textContent = 'name';

  sortingComponent.append(wrapper);
  wrapper.append(sortingTitle, btnContainer);
  btnContainer.append(priceBtn, nameBtn);



  return sortingComponent;






}




