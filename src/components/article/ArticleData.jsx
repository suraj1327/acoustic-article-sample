import React, { Component } from 'react'
import * as Constants from '../../constants';
import './../../styles/article.scss'
import ArticleElements from './ArticleElements';

export default class ArticleData extends Component {

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
        //Get the article from the provided api when component gets mounted. We can also use third party like axios
        try {
            this.state.loading = true;
            const articleUrl = Constants.articleUrl;
            let articleResponse = await fetch(articleUrl);
            if (articleResponse.ok) {
                //retrieved article data is stored in the Component state
                let articleData = await articleResponse.json();
                this.setState({ article: articleData, loading: false });
            } else {
                this.setState({ error: true, errorMessage: "The article data could not be fetched due to an error", loading: false });
            }
        } catch (err) {
            this.setState({ error: true, errorMessage: `There is a server error while fetching article JSON ${err}`, loading: false })
        }

    }


  render() {
    return (
        <div className="articleDisplayedContent">
        <p className='articleName'>{this.state.loading? "Loading..": this.state.article?.name}</p>
        <p className='errorMsg'>{this.state.error? this.state.errorMessage:''}</p>
         <ArticleElements elementsToRender={this.state.article?.elements}/>
         </div>
    )
  }
}

