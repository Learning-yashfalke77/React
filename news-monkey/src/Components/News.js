import React from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import axios from 'axios'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends React.Component {
    static defaultProps = {
        pageSize: 12,
        country: "in",
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            articles: [],
            page: 1,
            totalArticles: 0,
        }
    }
    
    async componentDidMount() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d50143a24cc4ec89717979fed312e67&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        this.props.setProgress(30)
        const res = await axios.get(url)
        this.props.setProgress(60)
        this.setState({ articles: res.data.articles, totalArticles: res.data.totalResults, loading: false })
        this.props.setProgress(100)
    }

    fetchMoreData = async () => {
        this.setState((st) => ({ page: st.page + 1 }))
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d50143a24cc4ec89717979fed312e67&page=${this.state.page}&pageSize=${this.props.pageSize}`
        const res = await axios.get(url)
        this.setState((st) => ({ articles: st.articles.concat(res.data.articles) }))
    };

    render() {
        return (
            <div>
                <h1 className="display-6 mb-4 ms-2">News Monkey - Top {this.props.category} Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Spinner />}
                >

                    <div className="container p-3" >
                        <div className="row" >
                            {this.state.articles.map((article) => (
                                <div className="col-md-4" key={article.url} >
                                    <NewsItem title={article.title ? article.title.slice(0, 45) : 'News Title'} description={article.description ? article.description.slice(0, 88) : 'News Description'} imgUrl={article.urlToImage ? article.urlToImage : 'https://image.freepik.com/free-vector/news-concept-illustration-flat-design_23-2148268772.jpg'} url={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                </InfiniteScroll>
            </div>
        );
    }
}