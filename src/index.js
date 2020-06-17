import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {IntlProvider} from "react-intl";

import { store } from "./helpers/store";
import App from "./App";
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
