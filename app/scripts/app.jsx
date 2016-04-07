var React = require('react');
var Signup = require('./signup');
var Dropzone = require("dropzone");

var App = React.createClass({
	render: function() {
		return (
			<div className="App">
				<Signup />
			</div>
		);
	}
});

React.render(
	<App />,
	document.getElementById('content')
);