var React = require('react');
var Signup = require('./signup');
var Dropzone = require("dropzone");
var Autosize = require("autosize");

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

// resizes text areas
Autosize($('textarea'));

//hilights input text on click
$("input[type='text'],textarea").on("click", function () {
   $(this).select();
});