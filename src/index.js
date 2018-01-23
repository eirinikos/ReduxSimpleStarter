
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD6YH1hRhbipszVCI43vfz5kCx8Vr3ugO4';

// create a new component, which will produce HTML
const App = () => {
	return <div>Bonjour!</div>;
}

// show the component's HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));