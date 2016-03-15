var React = require('react');

var ImageTitle = React.createClass({
	render: function() {

		return(
			<div className="imageTitle">
				<span>{this.props.data}</span>
			</div>
		);
	}
});

module.exports = ImageTitle;