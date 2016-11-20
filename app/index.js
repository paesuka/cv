'use_strinct';

// import './style.css';
import './style/style.scss';

import store from './store/store';
import fetchInitialState from './store/actions/initialStateAction';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import data from './content';

store.subscribe(() => {
  console.log('store changed', store.getState());
});
store.dispatch(fetchInitialState());

function render() {
    ReactDOM.render(
        <Layout data={data}/>, document.getElementById("container"));
}
render();
