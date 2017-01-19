import React from 'react';
import ReactDOM from 'react-dom';
import MultiAsset from './multiAsset';

const DATA = [ 
				{
					id: 1,
					title: 'Ferrari Dino 206 GT',
					image: 'http://68.media.tumblr.com/2ac8e62be0e96a61ff2b7b55c67b3ac8/tumblr_ojra6aHFCa1qk9hrqo1_1280.jpg'
				},
				{
					id: 2,
					title: 'De Tomaso Pantera',
					image: 'http://68.media.tumblr.com/5d031dd64327720762b2e216cc2c7f55/tumblr_ojye1h0Yqq1qk9hrqo1_1280.jpg'
				},
				{
					id: 3,
					title: 'Porsche 356A 1600 Speedster',
					image: 'http://68.media.tumblr.com/590a34e4f37959d312b691fa451d374d/tumblr_oj76w2j6Id1qk9hrqo1_1280.jpg'
				},
				{
					id: 4,
					title: ' Ferrari 265 GTB/4',
					image: 'http://68.media.tumblr.com/6f2da7525c54826b73f2ed85df711210/tumblr_oi0n3nZvKH1qk9hrqo1_1280.jpg'
				}
			];

app.ALL_ASSETS = 'all';

export default class App extends React.Component {

	render() {
		return (
			<div className="app container">
				<MultiAsset data={this.props.data} />
			</div>
		)
	}
}

ReactDOM.render(
  <App data={DATA} />,
  document.getElementById('app')
);