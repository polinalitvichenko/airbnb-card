import { Header } from "./header.js"; //подключение стороннего модуля (в html поставить type="module")
import { SearchAndSort } from "./searchAndSort.js";


// точка кода в app(application)
const createApp = () => {
  const header = Header();
  const searchSort = SearchAndSort();
  document.body.append(header, searchSort);

}
//запускаем app
createApp();

