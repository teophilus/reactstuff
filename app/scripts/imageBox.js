import React, { Component } from 'react';

export class ImageBox extends React.Component {

	render() {
		return (
			<div className="image-box">
				<img src="http://68.media.tumblr.com/0e5dafee0184cbbdb9347c75ce9f62ff/tumblr_oi1wfaCWsx1qk9hrqo1_1280.jpg" />
				<a href="">The Penny Drop café</a>
			</div>
		);
	}
}

export default ImageBox