import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import App from "./App";
import ptBR from "./lang/ptBR";
import { store } from "./state/store";

const Application: React.FC = () => {
  return (
    <IntlProvider messages={ptBR} locale="pt-BR" defaultLocale="pt-BR">
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
