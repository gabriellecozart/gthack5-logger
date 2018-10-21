
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './map.js'

import Button from "@material-ui/core/Button";

// ReactDOM.render(
//   <Map />,
//   document.getElementById('root')
// );

class FrontPageElement extends React.Component{
	constructor()
	{
		super();
		this.state = {email: '', password: ''};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    };

	handleChange (event) {
		// check it out: we get the event.target.name (which will be either "treeName" or "treeType")
		// and use it to target the key on our `state` object with the same name, using bracket syntax
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state);
	}

	handleSubmit (event) {
		console.log("hello");
		fetch('http://localhost:8080/api/authenticate', {
			mode: 'no-cors',
			method: 'post',
			body: JSON.stringify(this.state)
		}).then(function(response) {
			console.log(response);
		});
		alert('Your request has been completed ' + JSON.stringify(this.state));
		event.preventDefault();
	}

	render(){
		return(
			<div>
				<div className='frontpage'>
				<h1> roots </h1>
				<form id = "itsaform" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="email" name='email' className="form-control" id="inputEmail" placeholder="Email" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<input type="password" name='password' className="form-control" id="inputPassword" placeholder="Password" onChange={this.handleChange}/>
					</div>
					{/* <div className="checkbox">
						<label><input type="checkbox" /> Remember me</label>
					</div> */}
					<button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Login</button>
					<button id = "createacc" type="submit" className="btn btn-primary">Create Account</button>
				</form>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<FrontPageElement />, document.querySelector("#root"));

