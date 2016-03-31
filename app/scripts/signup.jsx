var React = require('react');

var Signup = React.createClass({

	getInitialState: function() {
	    return {
	        value: 'Title'  
	    };
	},

	handleChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},

	render: function() {
		return (
			<div className="Signup">
				<h1>{this.state.value}</h1>
				<form>
					<input
						type="text"
						placholder="enter title"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
});

module.exports = Signup;