import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';
import todos from './reducers/index';

let store = createStore(todos);

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
  document.getElementById('root') as HTMLElement
);
