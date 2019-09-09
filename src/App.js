import React, { Component } from 'react';
import Header               from './components/Header';
import ListNews             from './components/ListNews';

export default class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.apiCallNews();

  }

  apiCallNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f0d79f28f75944c2af621c371c59c26c`;
    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    })
  }

  render() {
    return (
      <>
        <Header title="React News API"/>
        <div className="container white container-news">
          <ListNews news={this.state.news}/>
        </div>
      </>
    )
  }
}