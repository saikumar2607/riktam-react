import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

export const history = createBrowserHistory();

const persistConfig = {
  key: "tw-root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer(connectRouter(history))
);
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, routerMiddleware(history))
);

export const persistor = persistStore(store);
export default store;
