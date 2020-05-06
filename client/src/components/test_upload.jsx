import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class Test_upload extends Component {
	constructor (props) {
		super(props);
		this.state = {
			file:null,
			login:'',
			email:'',
			name:'',
			surname:'',
			birthday:'',
			Gender:'',
			sexual_orientation:''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange = (event) => {
		const name = event.target.name;
		this.setState({[name] : event.target.value});
		console.log(this.state);
	}

	onFileChange = event => {
		this.setState({ file: event.target.files[0]});
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log("submited")
		const formData = new FormData()
		formData.append('file', this.state.file, this.state.file.name);
		fetch('/imgupload', {
		  method: 'POST',
		  body: formData
		})
		.then(response => response.json())
		.then(data => {
		  console.log(data)
		})
		.catch(error => {
		  console.error(error)
		})
	}

	render(){
		return (
			<div>
				<div className="container">
					<form onSubmit={this.onSubmit}>
						<Form.Row>
							<Form.Group>
								<Form.Label>name</Form.Label>
								<Form.Control type="text" name="name" value={this.state.name} placeholder="change your name" onChange={(event) => {this.handleInputChange(event)}}></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>surnam</Form.Label>
								<Form.Control type="text" name="surname" placeholder="change your surname" onChange={(event) => {this.handleInputChange(event)}}></Form.Control>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group>
								<Form.Label>login</Form.Label>
								<Form.Control type="text" name="login" placeholder="change your login"></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>email</Form.Label>
								<Form.Control type="email" name="email" placeholder="change your email"></Form.Control>
							</Form.Group>
						</Form.Row>
						<Form.Group controlId="birthday">
							<Form.Label>Birthday</Form.Label>
							<Form.Control type="date" placeholder="Enter email" name="birthday"/>
						</Form.Group>
						<Form.Row>
					<Form.Group as={Col} controlId="gender">
						<Form.Label>Gender</Form.Label>
							<Form.Control as="select" custom name="gender">
								<option>Man</option>
								<option>Woman</option>
								<option>Other</option>
							</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="sexual_orientation">
						<Form.Label>Sexual Orientation</Form.Label>
							<Form.Control as="select" custom name="sexual_orientation">
								<option>Heterosexual</option>
								<option>Homosexual</option>
								<option>Bisexual</option>
							</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Example textarea</Form.Label>
					<Form.Control as="textarea" rows="3" name="decription" placeholder="description" />
				</Form.Group>
						<input type="file" name="file" onChange={this.onFileChange}/>
						<input type="submit"/>
				</form>
				</div>
			</div>
		)
	}
}


export default Test_upload;
