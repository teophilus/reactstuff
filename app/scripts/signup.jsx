var React = require('react');
var TransitionOption = require('./transition-option');

var Signup = React.createClass({

	getInitialState: function() {
	    return {
	    	image: 'http://pop.projecttwo77.com/images/hero.jpg',
	        title: 'Title',
	        description: 'Description',
	        disclaimer: 'We hate spam as much as you do, and you can unsubscribe anytime.',
	        button: 'sign up',
	        transition: ''
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

	handleTransitionChange: function(e) {
		this.setState({
			transition: e.transition + ' ' + 'animated'
		})
		setTimeout(this.reset, 2500)
	},

	reset: function() {
		this.setState({
			transition: ''
		})
	},

	render() {
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
					<TransitionOption onChange={this.handleTransitionChange}/>
					<input type="submit" value="Save" />
				</form>
				<div id="container">
					<div id="pop" ref="transitionObj" className={this.state.transition}>
						<div className="layout">
							{/* <img className="image" src={this.state.image} alt=""/> */}
							<form action="/file-upload" className="dropzone" id="my-awesome-dropzone">
								{/* <input type="file" name="file" /> */}
							</form>

							<div className="content">
								<h1 className="heading">
									<input className="preview" type="text"
									value={this.state.title}
									onChange={this.handleTitleChange}
									/>
								</h1>
								<small className="subtitle">
									<textarea className="preview" rows="1" type="text"
									value={this.state.description}
									onChange={this.handleDescriptionChange}
									/>
								</small>
								<form>
									<input className="input" type="text" placeholder="Email Address" />
									<button type="submit" className="button">{this.state.button}</button>
								</form>
								<small className="disclaimer">
									<textarea className="preview" type="text"
									value={this.state.disclaimer}
									onChange={this.handleDisclaimerChange}
									/>
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Signup;