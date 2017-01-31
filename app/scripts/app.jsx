import React from 'react';
import ReactDOM from 'react-dom';
import MultiAsset from './multiAsset';
import * as firebase from 'firebase';

const config = {  
  apiKey: "AIzaSyDFLn-eEcOyOVuovcpq9CL3ETV-jplhnh0",
  authDomain: "testproject-46951.firebaseio.com",
  databaseURL: "https://testproject-46951.firebaseio.com"
};

firebase.initializeApp(config);
const database = firebase.database();

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			assets: {}
		};
	}

	componentDidMount() {
		const assetsRef = firebase.database().ref('assets');

		assetsRef.on('child_added', (assetRef) => {
			let asset = assetRef.val();
			let assets = Object.assign({}, this.state.assets);
			assets[asset.id] = asset;
			this.setState({ assets: assets });
		});

		assetsRef.on('child_removed', (assetRef) => {
			let asset = assetRef.val();
			let assets = Object.assign({}, this.state.assets);
			delete assets[asset.id];
			this.setState({ assets: assets });
		});
		
		assetsRef.on('child_changed', (assetRef) => {
			let asset = assetRef.val();
			let assets = Object.assign({}, this.state.assets);
			assets[asset.id] = asset;
			this.setState({ assets: assets });
		});
	}

	render() {
		return (
			<div className="app container">
				<MultiAsset assets={this.state.assets} />
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);