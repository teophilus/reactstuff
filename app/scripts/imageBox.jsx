import React, { Component } from 'react';

export class ImageBox extends React.Component {

	render() {
		return (
			<div className="image-box" >
				<div className="image">
					<img src={this.props.asset.image} />
				</div>
				<a className="title" href="">{this.props.asset.title}</a>
			</div>
		)
	}
}

export default ImageBox