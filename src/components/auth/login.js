import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errorText: ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ''
        })
    }

    handleSubmit(event) {
        axios.post(
            'https://api.devcamp.space/sessions',
            {
                client: {
                    email: this.state.email,
                    password: this.state.password
                }
            },
            { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                console.log('Puedes entrar')
                this.props.handleSuccessfulAuth()
            } else {
                this.setState({
                    errorText: 'Wrong email or password'
                })
                this.props.handleUnsuccessfulAuth()
            }
        }).catch(error => {
            this.setState({
                errorText: 'An error occured'
            })
            this.props.handleUnsuccessfulAuth()
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <div>{this.state.errorText}</div>
                
                <form onSubmit={() => this.handleSubmit(event)}>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your email'
                        value={this.state.email}
                        onChange={() => this.handleChange(event)}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Your password'
                        value={this.state.password}
                        onChange={() => this.handleChange(event)}
                    />

                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}