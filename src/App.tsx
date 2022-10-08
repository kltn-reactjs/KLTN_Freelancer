import React from "react";
import Login from "./Screens/Login";
import OnBoard from "./Screens/OnBoard";
import { Provider } from "react-redux";
import Navigator from "./Navigation/Navigator";
import { store } from "./app/store";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
