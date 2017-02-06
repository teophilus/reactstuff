import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export class Asset extends React.Component {

	render() {
		let asset = _.find(this.props.assets, (asset) => asset.id == this.props.params.assetId);
		if (asset) {

			console.log(asset.id)

			return (
				<div className="asset" >
					<h1>{asset.title}</h1>
					<div className="image">
						<img src={asset.image} />
					</div>
					<Link to={`/asset/${parseInt(asset.id) - 1}`}>Prev</Link>
					<Link to={`/asset/${parseInt(asset.id) + 1}`}>Next</Link>
				</div>
			)
		} else {
			return <h3>Loading...</h3>
		}
	}
}

export default Asset