import React, { Component } from 'react';
import { Link } from 'react-router'

export class ImageBox extends React.Component {

	render() {
		return (
			<div className="image-box" >
				<div className="image">
					<img src={this.props.asset.image} />
				</div>
				<Link className="title" to={`/asset/${this.props.asset.id}`}>{this.props.asset.title}</Link>
			</div>
		)
	}
}

export default ImageBox