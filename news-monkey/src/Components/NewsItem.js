import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../css/NewsItem.css'

export class NewsItem extends Component {
    static propTypes = {

    }

    render() {


        const { title, description, imgUrl, author, date, source } = this.props

        return (
            <div className="NewsItem card mb-4">
                <img src={imgUrl} className="card-img-top" alt="..." style={{ height: "40vh", objectFit: "cover" }} />
                <span style={{ left: '70%' ,zIndex: '1'}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{source}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}..  </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a target='_blank' rel='noreferrer' href={this.props.url} className="btn btn-sm btn-outline-warning" >View News</a>
                </div>
            </div>

        )
    }
}

export default NewsItem
