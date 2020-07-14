import React, { Component } from 'react'
import axios from 'axios'

import RichTextEditor from '../forms/rich-text-editor'

export default class BlogForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            blog_status: ''
        }
    }

    buildForm() {
        let formData = new FormData()

        formData.append('portfolio_blog[title]', this.state.title)
        formData.append('portfolio_blog[blog_status]', this.state.blog_status)

        return formData
    }

    handleSubmit(event) {
        axios.post(
            'https://marktforsyth.devcamp.space/portfolio/portfolio_blogs',
            this.buildForm(),
            { withCredentials: true }
        ).then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog)

            this.setState({
                title: '',
                blog_status: ''
            })
        }).catch(error => {
            console.log('blog-form handleSubmit error', error)
        })

        event.preventDefault()
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)} className='blog-form-wrapper'>
                <div className='two-column'>
                    <input
                        type='text'
                        onChange={event => this.handleChange(event)}
                        name='title'
                        placeholder='Blog title'
                        value={this.state.title}
                    />

                    <input
                        type='text'
                        onChange={event => this.handleChange(event)}
                        name='blog_status'
                        placeholder='Blog status'
                        value={this.state.blog_status}
                    />
                </div>

                <div className='one-column'>
                    <RichTextEditor />
                </div>

                <button className='btn'>Save</button>
            </form>
        )
    }
}