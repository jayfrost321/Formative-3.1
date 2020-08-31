import React, {Component} from 'react';
import Article from './Article';
import './App.css';

var token = '8439a3dac357922f642ab4143d6a67cd'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      articles:[
        {
          title: "",
          description: "",
          url: "",
          image: ""
        }
      ]
    }
  }

  componentDidMount(){
    this.loadArticlesByTerm('world')
  }
  loadArticlesByTerm = (term)=>{
    var url = 'https://gnews.io/api/v3/search?q='+term+'&token='+token
    fetch(url)
      .then(res=>res.json())
      .then((data)=>{
        var articles = data.articles
        this.setState({
          articles: articles
        })
      })
  }
  handleLinkClick = (e)=>{
    e.preventDefault()
    var term = e.target.id
    this.loadArticlesByTerm(term)
  }

  render(){
    return(
      <div className="app">
        <div className="header">
          <h1>GNews</h1>
          <div className="menu">
            <nav>
              <li><a href="#" id="world" onClick={this.handleLinkClick}>World</a></li>
              <li><a href="#" id="sports" onClick={this.handleLinkClick}>Sports</a></li>
              <li><a href="#" id="business" onClick={this.handleLinkClick}>Business</a></li>
              <li><a href="#" id="technology" onClick={this.handleLinkClick}>Technology</a></li>
            </nav>
            <div className="search">
              <input type="text" placeholder="Search..." className="searchinput"/>
            </div>
          </div>
        </div>
    
          <div className="articles">
            {this.state.articles.map(item=>{

              var props = {
                ...item
              }
              
              return (
                <Article {...props}/>
              )
            })}
          </div>
      </div>
    )
  }
}

export default App;
