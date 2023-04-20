export const Header = () => {
  const header = document.createElement('header') //создаём тег элемента и кладем в преременную
  const container = document.createElement('div')
  const wrapper = document.createElement('div')
  const link = document.createElement('a')
  const logoImg = document.createElement('img')
  const createImg = document.createElement('div')
  const createImgElement = document.createElement('img')

  // добавление атрибутов
  header.classList.add('header')
  container.classList.add('container')
  wrapper.classList.add('header-wrapper')
  link.classList.add('header-link')
  logoImg.classList.add('link__logo')
  createImg.classList.add('header-create')
  createImgElement.classList.add('create__ImgElement')
  link.href = '/'
  logoImg.src = '../img/logo.svg'
  createImgElement.src = '../img/header-create.svg'

  //header.style.background = 'red'; //css в js
  //header.style.fontSize = ....
  header.append(container) //вкладываем один тег в другой
  container.append(wrapper)
  createImg.append(createImgElement)
  wrapper.append(link, createImg)
  link.append(logoImg)

  return header;
}



/* Todo  (что нужно сверстать)
1. Header
2. Container
3.Wrapper for header
4. Link
5. Img Logo in Link
6. Header create home
*/

// если бы header был в html
//document.getElementById('header') // по его id можно его вытащить, тут не нужна решетка для id
//const headerTag = document.querySelector('.header'); // тут элемент указывается либо по классу обращение ., либо по id #