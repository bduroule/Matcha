import React, {Component} from 'react'
import "./profile.css";
//import testupload from './components/profile'

class profile extends Component {
	state = {
		user:[]
	};


    componentDidMount() {
        const queryString = window.location.search
        const urlParam = new URLSearchParams(queryString)
		fetch('/profile/'+urlParam.get('uid'))
		.then(response => response.json())
        .then (user => this.setState({user}, () => console.log('user fetched..', user)));
    }

	render(){
		return (
			<div className="container">
				{this.state.user.map(user => 
				<div>
                    <h1 className="test">{user.login}</h1>
						<button variant="primary">
							Dark
						</button>
					</div>

                )}
			</div>
		)
	}
}


export default profile;