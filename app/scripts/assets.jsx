import React from 'react';
import ReactDOM from 'react-dom';
import MultiAsset from './multiAsset';

export default class Assets extends React.Component {

	render() {
		return (
			<div className="app container">
				<MultiAsset assets={this.props.assets} />
			</div>
		)
	}
}

export default Assets;