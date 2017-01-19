import React from 'react';
import ReactDOM from 'react-dom';
import ImageBox from './imageBox';

const data = [ 
			{id: 1, title: 'The Penny Drop café', image: 'http://68.media.tumblr.com/0e5dafee0184cbbdb9347c75ce9f62ff/tumblr_oi1wfaCWsx1qk9hrqo1_1280.jpg'}
			];

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<ImageBox />
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);