var React = require('react');
var ImageHolder = require('./image-holder');

var Gallery = React.createClass({
	render: function() {

		var nodes = this.props.data.map(function(data) {
			return (
				<ImageHolder key={data.id}>
					{data}
				</ImageHolder>
			);
		});

		return(
			<div className="gallery">
				{nodes}
			</div>
		);
	}
});

module.exports = Gallery;