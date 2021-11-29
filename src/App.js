import "./App.css";
import ChatPage from "./chat/Home";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <ChatPage />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
