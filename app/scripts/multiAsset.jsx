import React, { Component } from 'react';
import ImageBox from './imageBox';

export class MultiAsset extends React.Component {

	render() {
		return (
			<div className="multi-asset">
				{this.props.assets.map(asset => (
					<ImageBox key={asset.id} asset={asset} />
				))}
			</div>
		)
	}
}

export default MultiAsset