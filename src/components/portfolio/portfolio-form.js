import React, { Component } from 'react'
import axios from 'axios'

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            category: '',
            position: '',
            url: '',
            thumb_image: '',
            banner_image: '',
            logo: ''
        }
    }

    buildForm() {
        let formData = new FormData()

        formData.append('portfolio_item[name]', this.state.name)
        formData.append('portfolio_item[description]', this.state.description)
        formData.append('portfolio_item[url]', this.state.url)
        formData.append('portfolio_item[category]', this.state.category)
        formData.append('portfolio_item[position]', this.state.position)

        return formData
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios
            .post(
                'https://marktforsyth.devcamp.space/portfolio/portfolio_items',
                this.buildForm(),
                { withCredentials: true }
            ).then(response => {
                console.log('Response from handleSubmit: ', response)
            }).catch(error => {
                console.log('portfolio-form handleSubmit error: ', error)
            })

        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>PortfolioForm</h1>
                
                <form onSubmit={() => this.handleSubmit(event)}>
                    <div>
                        <input
                            type='text'
                            name='name'
                            placeholder='Porfolio Item Name'
                            value={this.state.name}
                            onChange={() => this.handleChange(event)}
                        />

                        <input
                            type='text'
                            name='url'
                            placeholder='URL'
                            value={this.state.url}
                            onChange={() => this.handleChange(event)}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            name='position'
                            placeholder='Position'
                            value={this.state.position}
                            onChange={() => this.handleChange(event)}
                        />

                        <select
                            name='category'
                            value={this.state.category}
                            onChange={() => this.handleChange(event)}
                        >
                            <option value='eCommerce'>eCommerce</option>
                            <option value='Scheduling'>Scheduling</option>
                            <option value='Enterprise'>Enterprise</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type='text'
                            name='description'
                            placeholder='Description'
                            value={this.state.description}
                            onChange={() => this.handleChange(event)}
                        />
                    </div>

                    <div>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}