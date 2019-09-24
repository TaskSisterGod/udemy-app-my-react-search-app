import React,{Component} from 'react';

const GITHUB_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

console.log({GITHUB_ACCESS_TOKEN})

class App extends Component {
	render(){
		return (
			<div>Hello World</div>
		)
	}
}

export default App
