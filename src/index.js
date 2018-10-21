import React from "react";
import ReactDOM from "react-dom";
import styles from './index.css'

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
	}

	handleSubmit(event) {
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
						<input type="email" name='email' className="form-control" id="inputEmail" placeholder="Email" />
					</div>
					<div className="form-group">
						<input type="password" name='password' className="form-control" id="inputPassword" placeholder="Password" />
					</div>
					{/* <div className="checkbox">
						<label><input type="checkbox" /> Remember me</label>
					</div> */}
					<button type="submit" className="btn btn-primary">Login</button>
					<button id = "createacc" type="submit" className="btn btn-primary">Create Account</button>
				</form>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<FrontPageElement />, document.querySelector("#root"));

