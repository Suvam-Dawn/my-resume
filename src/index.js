import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.scss';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import LanguageConfig from './config/LanguageConfig';
i18next.init({
  interpolation: {escapeValue: false}, // React already does escaping
  lng: 'en', // language to use
  resources: LanguageConfig.I18ConfigResources(),
  fallbackLng: 'en',
});
ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
