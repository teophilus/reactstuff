import React from 'react';
import ReactDOM from 'react-dom';
import MultiAsset from './multiAsset';

const DATA = [ 
				{
					id: 1,
					title: 'The Penny Drop café',
					image: 'http://68.media.tumblr.com/0e5dafee0184cbbdb9347c75ce9f62ff/tumblr_oi1wfaCWsx1qk9hrqo1_1280.jpg'
				},
				{
					id: 2,
					title: 'De Tomaso Pantera',
					image: 'http://68.media.tumblr.com/5d031dd64327720762b2e216cc2c7f55/tumblr_ojye1h0Yqq1qk9hrqo1_1280.jpg'
				}
			];

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<MultiAsset data={this.props.data} />
			</div>
		)
	}
}

ReactDOM.render(
  <App data={DATA} />,
  document.getElementById('app')
);