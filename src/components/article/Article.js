import React, { Component } from 'react'
import * as Constants from '../../constants';
import './../../styles/article.scss'
import ArticleElements from './ArticleElements';

export default class Article extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false,
            article:null,
            error: false
        }
    }

    componentDidMount(){
        this.getArticle();
    }
 
    async getArticle() {
        //Get the article from the provided api when component gets mounted
        try {
            this.state.loading = true;
            const articleUrl = Constants.articleUrl;
            let articleResponse = await fetch(articleUrl);
            if (articleResponse.ok) {
                //retrieved article data is stored in the Component state
                let articleJSON = await articleResponse.json();
                this.setState({ article: articleJSON, loading: false });
            } else {
                console.log("The JSON could not be obtained");
                this.setState({ error: true, loading: false });
            }
        } catch (error) {
            console.log("There is a server error obtaining article JSON");
            this.setState({ error: true,loading: false })
        }

    }


  render() {
    return (
        <div className="articleDisplayedContent">
        <p className='articleName'>{this.state.loading? "Loading..": this.state.article?.name}</p>
        <p className='errorMsg'>{this.state.error? this.state.error:''}</p>
         <ArticleElements elementsToRender={this.state.article?.elements}/>
         </div>
    )
  }
}

