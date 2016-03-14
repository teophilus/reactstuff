var React = require('react');
var CommentList = require('./comment-list');
var CommentForm = require('./comment-form');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>FOoo</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		);
	}
});