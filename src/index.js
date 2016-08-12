import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (process.env.NODE_ENV !== 'production') {
	if (!rootEl.firstChild || !rootEl.firstChild.attributes ||
	    !rootEl.firstChild.attributes['data-react-checksum']) {
		console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
	}
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
