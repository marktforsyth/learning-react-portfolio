import React, { Component } from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

import BlogForm from '../blog/blog-form'
import HeaderFeaturedImage from '../header-images/header-featured-image'

export default class BlogDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentBlogId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        }
    }

    handleUpdateFormSubmission(blog) {
        this.setState({
            blogItem: blog,
            editMode: false
        })
    }

    handleFeaturedImageDelete() {
        this.setState({
            blogItem: {
                featured_image_url: ''
            }
        })
    }

    handleEditClick() {
        if (this.props.loggedInStatus === 'LOGGED_IN') {
            this.setState({ editMode: true })
        }
    }

    getBlogItem() {
        axios.get(
            `https://marktforsyth.devcamp.space/portfolio/portfolio_blogs/${this.state.currentBlogId}`
        ).then(response => {
            this.setState({
                blogItem: response.data.portfolio_blog
            })
        }).catch(error => {
            console.log('getBlogItem error', error)
        })
    }

    componentDidMount() {
        this.getBlogItem()
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem

        const contentManager = () => {
            if (this.state.editMode) {
                return <BlogForm
                    handleFeaturedImageDelete={() => this.handleFeaturedImageDelete()}
                    handleUpdateFormSubmission={blog => this.handleUpdateFormSubmission(blog)}
                    editMode={this.state.editMode}
                    blogToEdit={this.state.blogItem}
                />
            } else {
                return (
                    <div className='content-container'>
                        <h1 onClick={() => this.handleEditClick()}>{title}</h1>

                        <HeaderFeaturedImage img={featured_image_url} />

                        <div className='content'>{ReactHtmlParser(content)}</div>
                    </div>
                )
            }
        }

        return (
            <div className='blog-container'>{contentManager()}</div>
        )
    }
}