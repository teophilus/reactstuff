import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';
import MultiAsset from './multiAsset';
import Asset from './Asset';
import Assets from './assets';
import _ from 'lodash';
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
			assets: []
		};
	}

	componentDidMount() {
		console.log('did mount');

		const assetsRef = firebase.database().ref('assets');

		assetsRef.on('child_added', (assetRef) => {
			let asset = assetRef.val();
			let assets = _.clone(this.state.assets);
			assets.push(asset);
			this.setState({ assets: assets });
		});

		assetsRef.on('child_removed', (assetRef) => {
			let asset = assetRef.val();
			let assets = _.clone(this.state.assets);
			_.remove(assets, (_asset) => _asset.id === asset.id);
			this.setState({ assets: assets });
		});
		
		assetsRef.on('child_changed', (assetRef) => {
			let asset = assetRef.val();
			let assets = _.clone(this.state.assets);
			let idx = _.findIndex(assets, (_asset) => _asset.id === asset.id);
			assets[idx] = asset;
			this.setState({ assets: assets });
		});
	}

	render() {
		return (
			<div>
				{this.props.children && React.cloneElement(this.props.children, {
					assets: this.state.assets
				})}
			</div>
		)
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="assets" component={Assets} />
			<Route path="/asset/:assetId" component={Asset} />
		</Route>
	</Router>
	), document.getElementById('app')
);