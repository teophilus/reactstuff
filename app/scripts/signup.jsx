import React from 'react'
import TransitionOption from './transition-option'

class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			image: 'http://pop.projecttwo77.com/images/hero.jpg',
			title: 'Title',
			description: 'Description',
			disclaimer: 'We hate spam as much as you do, and you can unsubscribe anytime.',
			button: 'sign up',
			transition: ''
		}
		this.handleImageChange = this.handleImageChange.bind(this)
		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
		this.handleDisclaimerChange = this.handleDisclaimerChange.bind(this)
		this.handleButtonChange = this.handleButtonChange.bind(this)
		this.handleTransitionChange = this.handleTransitionChange.bind(this)
	}

	handleImageChange(e) {
		this.setState({
			image: e.target.value
		})
	}

	handleTitleChange(e) {
		this.setState({
			title: e.target.value
		})
	}

	handleDescriptionChange(e) {
		this.setState({
			description: e.target.value
		})
	}

	handleDisclaimerChange(e) {
		this.setState({
			disclaimer: e.target.value
		})
	}

	handleButtonChange(e) {
		this.setState({
			button: e.target.value
		})
	}

	handleTransitionChange(e) {
		this.setState({
			transition: e.transition + ' ' + 'animated'
		})
		setTimeout(this.reset, 2500)
	}

	reset() {
		this.setState({
			transition: ''
		})
	}

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
						value={this.state.button}
						onChange={this.handleButtonChange}
					/>
					<br/>
					<TransitionOption onChange={this.handleTransitionChange}/>
					<input type="submit" value="Save" />
				</form>
				<div id="container">
					<div id="pop" className="pop-email" ref="transitionObj" className={this.state.transition}>
						<div className="layout">
							{/* <img className="image" src={this.state.image} alt=""/> */}
							<form action="/file-upload" className="dropzone" id="email-dropzone">
							</form>

							<div className="content">
								<h1 className="heading">
									<input className="preview" type="text"
									value={this.state.title}
									onChange={this.handleTitleChange}
									/>
								</h1>
								<small className="subtitle">
									<textarea className="preview"
									rows="1"
									type="text"
									value={this.state.description}
									onChange={this.handleDescriptionChange}
									/>
								</small>
								<form>
									<input className="input" type="text" placeholder="Email Address" />
									<button type="submit" className="button">{this.state.button}</button>
								</form>
								<small className="disclaimer">
									<textarea className="preview"
									rows="1"
									type="text"
									value={this.state.disclaimer}
									onChange={this.handleDisclaimerChange}
									/>
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup
