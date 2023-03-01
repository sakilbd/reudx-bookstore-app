import { Provider } from "react-redux";

import store from "./redux/store";
import "./assets/styles/style.css";

import Body from "./components/Body";

function App() {

  
  
  return (
    <Provider store={store}>
      <>
      <Body/>
      </>
    </Provider>
  );
}

export default App;
