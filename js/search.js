export const Search = () => {
  const searchComponent = document.createElement('div');
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const searchTitle = document.createElement('h4');
  const searchInput = document.createElement('input');

  searchComponent.classList.add('search');
  container.classList.add('container');
  wrapper.classList.add('search-wrapper');
  searchTitle.classList.add('search__title');
  searchInput.classList.add('search-input');

  //добавление текста нединамичного, который не меняется
  // searchTitle.textContent = 'lalalalala'
  // добавление текста через переменную
  // const str = Search ${searchInput.value.length > 0 ? 'by' : ''}
  //searchTitle.innerHTML = str
  searchInput.placeholder = 'Enter what you are looking for';
  searchTitle.textContent = 'Search by';

  searchComponent.append(wrapper)
  wrapper.append(searchTitle, searchInput)

  return searchComponent;
}