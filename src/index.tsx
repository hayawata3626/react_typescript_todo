import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';
import todos from './reducers/index';
import { addTodo } from './actions/index';


let store = createStore(todos);

store.dispatch(addTodo('sdsdsds'))
console.log(store.getState());



ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
  document.getElementById('root') as HTMLElement
);
