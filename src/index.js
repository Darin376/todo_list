import React from 'react';
import ReactDOM from 'react-dom';
import {TodoListPage} from './pages/TodoListPage.js'
import {store} from './redux/store.js'
import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store = {store}>
    <TodoListPage/>
  </Provider>,
  document.getElementById('root')
);
