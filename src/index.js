
import React from 'react';
import ReactDOM from 'react-dom';

// create a new component, which will produce HTML
const App = function() {
	return <div>Bonjour!</div>;
}

// show the component's HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));