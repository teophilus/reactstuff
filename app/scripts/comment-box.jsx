var React = require('react');
var CommentList = require('./comment-list');
var CommentForm = require('./comment-form');

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		);
	}
});

module.exports = CommentBox;