var React = require('react');
var ReactDOM = require('react-dom')
var Signup = require('./signup');
var Dropzone = require("dropzone");
var Autosize = require("autosize");
var $ = require("jquery");

var App = React.createClass({
	render: function() {
		return (
			<div className="App">
				<Signup />
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('content')
);

// resizes text areas
Autosize($('textarea'));

//hilights input text on click
$("input[type='text'],textarea").on("click", function () {
   $(this).select();
});
