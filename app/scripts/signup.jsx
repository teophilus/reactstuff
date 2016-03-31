var React = require('react');

var Signup = React.createClass({

	getInitialState: function() {
	    return {
	    	image: 'http://pop.projecttwo77.com/images/hero.jpg',
	        title: 'Title',
	        description: 'Description',
	        disclaimer: 'We hate spam as much as you do, and you can unsubscribe anytime.',
	        button: 'sign up'
	    };
	},

	handleImageChange: function(e) {
		this.setState({
			image: e.target.value
		})
	},

	handleTitleChange: function(e) {
		this.setState({
			title: e.target.value
		})
	},

	handleDescriptionChange: function(e) {
		this.setState({
			description: e.target.value
		})
	},

	handleDisclaimerChange: function(e) {
		this.setState({
			disclaimer: e.target.value
		})
	},

	handleButtonChange: function(e) {
		this.setState({
			button: e.target.value
		})
	},

	render: function() {
		return (
			<div className="wrapper">
				<form className="configuration">
					<input
						type="text"
						placholder="enter title"
						value={this.state.image}
						onChange={this.handleImageChange}
					/>
					<br/>
					<input
						type="text"
						placholder="enter title"
						value={this.state.title}
						onChange={this.handleTitleChange}
					/>
					<br/>
					<textarea
						placholder="enter title"
						value={this.state.description}
						onChange={this.handleDescriptionChange}
					/>
					<br/>
					<textarea
						placholder="enter title"
						value={this.state.disclaimer}
						onChange={this.handleDisclaimerChange}
					/>
					<br/>
					<input
						type="text"
						placholder="enter title"
						value={this.state.button}
						onChange={this.handleButtonChange}
					/>
					<br/>
					<input type="submit" value="Save" />
				</form>
				<div id="container">
					<div id="pop">
						<div className="layout">
							<img className="image" src={this.state.image} alt=""/>
							<div className="content">
								<h1 className="heading">{this.state.title}</h1>
								<small className="subtitle">{this.state.description}</small>
								<form>
									<input className="input" type="text" placeholder="Email Address" />
									<button type="submit" className="button">{this.state.button}</button>
								</form>
								<small className="disclaimer">{this.state.disclaimer}</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Signup;