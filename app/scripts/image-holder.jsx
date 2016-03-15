var React = require('react');
var ImageBox = require('./image-box');
var ImageTitle = require('./image-title');

var ImageHolder = React.createClass({
	render: function() {
		return(
			<div className="imageHolder">
				<ImageBox data={this.props.children.medium} /> 
				<ImageTitle data={this.props.children.title} />
			</div>
		);
	}
});

module.exports = ImageHolder;