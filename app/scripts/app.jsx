var React = require('react');
var Gallery = require('./gallery');

var data = require('./data.json');


React.render(
	<Gallery data={data.tickets} />,
	document.getElementById('content')
);