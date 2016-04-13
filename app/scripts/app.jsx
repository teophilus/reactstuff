import React from 'react'
import ReactDOM from 'react-dom'
import Signup from './signup'
import Dropzone from 'dropzone'
import Autosize from 'autosize'
import $ from 'jquery'

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Signup />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('content'))

// resizes text areas
Autosize($('textarea'))

// hilights input text on click
$('input[type="text"],textarea').on('click', function () {
	$(this).select()
})
