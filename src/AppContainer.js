import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import News from './components/News';
import Footer from './components/Footer';

export default class AppContainer extends Component {

    state = {
        category : 'general',
        url : null,
    }

    getCategory = (category) => {
        //console.log(category);
        this.setState({
            category,
            search: ''
        })
        
    }

    getSearch = (search) => {
        //console.log(search);
        this.setState({
            search,
            category: 'general'
        })
        
    }

    getApiUrl = (url) => {
        //console.log(url);
        this.setState({
            url
        })
        
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar getCategory={this.getCategory} getSearch={this.getSearch} />
                    <Switch>
                        <Route exact path='/' render={(props)=> <Home {...props} category = {this.state.category} search={this.state.search} getApiUrl={this.getApiUrl} />} />
                        <Route path='/:news_id' render={(props)=> <News {...props} url={this.state.url}/>} />
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
