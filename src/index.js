
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD6YH1hRhbipszVCI43vfz5kCx8Vr3ugO4';

// create a new component, which will produce HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// show the component's HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));