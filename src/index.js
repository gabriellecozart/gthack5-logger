import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import SignIn from './SignIn';

function App() {
	let cond = 'signin';

	if (cond === 'signin') {
		return (
			<div>
				<SignIn firstName='Sarah' />
			</div>
		);
	} else {
		return <h1>404 Not Found</h1>
	}
	
// 	return (


//     // <Button variant="contained" color="primary">
//     //   Hello World
//     // </Button>
//   );
}

ReactDOM.render(<App />, document.querySelector("#root"));
