var React = require('react');
var Signup = require('./signup');

var App = React.createClass({
	render: function() {
		return (
			<div className="App">
				<h1>App</h1>
				<Signup />
			</div>
		);
	}
});

React.render(
	<App />,
	document.getElementById('content')
);