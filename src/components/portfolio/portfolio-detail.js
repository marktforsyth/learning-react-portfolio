import React, { Component } from 'react'
import axios from 'axios'

import HeaderFeaturedImage from '../header-images/header-featured-image'

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItem: ''
        }
    }

    getPortfolioItem() {
        axios.get(
            `https://marktforsyth.devcamp.space/portfolio/portfolio_items/${
                this.props.match.params.slug
            }`,
            { withCredentials: true }
        ).then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        }).catch(error => {
            console.log('portfolio-detail.js getPortfolioItem() error', error)
        })
    }

    componentDidMount() {
        this.getPortfolioItem()
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem

        return (
            <div className='portfolio-container'>
                <div className='content-container'>
                    <div className='portfolio-item-title'>
                        <h1>{name}</h1>
                        {logo_url
                        ? (
                            <a className='item-logo' href={url} target='_blank'>
                                <img src={logo_url} />
                            </a>
                        ): null}
                    </div>

                    <HeaderFeaturedImage img={banner_image_url} />

                    <h2>{description}</h2>
                </div>
            </div>
        )
    }
}