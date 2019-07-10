import React, { Component } from 'react'
import Axios from 'axios';


class News extends Component {
    state = {
        news : null
    }
    componentDidMount(){

        //console.log(this.props);
        let id = this.props.match.params.news_id;
        var url = this.props.url;
        Axios.get(url)
        .then( res => {
            //console.log(res.data);
            this.setState({
                news: res.data.articles[id]
            });
            console.log(res.data.articles[id]);
            
            
        })
    }



    render(){
        const news = this.state.news ? (
            <div className="news">
                <h4 className="center">{this.state.news.title}</h4>
                <h6 className='grey-text darken-5'>{this.state.news.description}</h6>
                <h6 className="right">{this.state.news.author}</h6>
                <img className='responsive-img' src={this.state.news.urlToImage} alt=""/>
                <p className='flow-text'>{this.state.news.content}</p>
                <a href={this.state.news.url}>Read more</a>
            </div>
        ) : (
            <div className="center">Loading news...</div>
        )
        return(
            
            <div className='container'>
                {news}
            </div>
        )
    }
}

export default News