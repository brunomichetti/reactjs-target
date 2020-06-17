import React from "react";
import { render } from "react-dom";
import { store } from "./helpers/store";
import { Provider } from "react-redux";
import App from "./App";
import {IntlProvider} from "react-intl";
import locale_en from "./translations/en.json";

const data = {
  'en': locale_en
};

const language = navigator.language.split(/[-_]/)[0];

render(
  <IntlProvider locale={language} messages={data[language]}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
