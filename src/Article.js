import React, {Component} from 'react';

class Article extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
        <div class="article">
            <div class="article-title">
                {this.props.title}
            </div>
            <div class="article-image">
                <img src={this.props.image} width="300px" height="300px"></img>
            </div>
            <div class="article-description">
                {this.props.description}
            </div>
            <div class="article-url">
                <a href={this.props.url}>Read more</a>
            </div>
        </div>
    )
  }
}

export default Article;