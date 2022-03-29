import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";

export const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
