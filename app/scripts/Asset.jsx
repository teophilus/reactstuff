import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export class Asset extends React.Component {

	render() {
		let asset = _.find(this.props.assets, (asset) => asset.id == this.props.params.assetId);
		if (asset) {
			return (
				<div className="asset" >
					<div className="image">
						<img src={asset.image} />
						{asset.id}
					</div>
				</div>
			)
		} else {
			return <h3>Loading...</h3>
		}
	}
}

export default Asset