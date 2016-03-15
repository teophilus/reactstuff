var React = require('react');

var ImageBox = React.createClass({
	render: function() {
		return(
			<div className="imageBox">
				<img src={this.props.data}/>
			</div>
		);
	}
});

module.exports = ImageBox;