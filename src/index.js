import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configList from './store/listConfig';
import configDetail from './store/detailConfig';
import configContext from './store/contextMenuConfig';
import configDeleteModal from './store/deleteConfirmModalConfig';
import configureNotification from './store/notificationConfing';


configList();
configDetail();
configContext();
configDeleteModal();
configureNotification();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
