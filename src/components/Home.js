import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom'

var lang = 'language=en';
var country = '&country=in'
var category = ''
var search = ''
var api = '&apiKey=153a1cd270064dbc89c62240fc8d8981'
var url = `https://newsapi.org/v2/top-headlines?${lang}${country}${category}${search}${api}`;

class Home extends Component {
    state = {
        news: [],
        url: null
    }
    
    componentDidMount() {
        //console.log('mounted');
        

        Axios.get(url)
            .then(res => {
                //console.log(res.data);
                this.setState({
                    news: res.data.articles,
                    url
                });
                this.props.getApiUrl(this.state.url)

            })
    }

    componentDidUpdate(prevProps){
        //console.log('updated');
        
        if(this.props.category!==prevProps.category || 
            this.props.search!==prevProps.search) {
            category =  '&category=' +this.props.category;
            search = this.props.search ? ('&sortBy=popularity&q=' + this.props.search) : ('') ;
            console.log(url + category + search);  
            Axios.get(url + category + search)
            .then(res => {
                console.log(res.data);
                let articles = res.data.articles
                this.setState({
                    news: articles,
                    url: url + category
                });

                this.props.getApiUrl(this.state.url)
                

            })
        }

    }

    render() {

        const { news } = this.state;
        const newsList = news.length ?
            (news.map((news1, i) => {
                return (
                    <div className="news card " key={i}>
                        <div className="card-content">
                            <Link to={'/' + i}>
                                <span className="card-title">{news1.title}</span>
                            </Link>
                            <p>{news1.description}</p>
                        </div>
                    </div>
                )
            })) : (
                <div className="center">
                    <h5>Loading...</h5>
                </div>
            )


        return (
            <div className='container'>
                <h4 className="center">Home</h4>
                
                <div className="row">
                {newsList}
                </div>
            </div>
        )
    }
}

export default Home