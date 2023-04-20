import { Header } from "./header.js"; //подключение стороннего модуля (в html поставить type="module")

// точка кода в app(application)
const createApp = () => {
  const header = Header();
  document.body.append(header);
}
//запускаем app
createApp();

