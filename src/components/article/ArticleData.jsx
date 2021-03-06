import React, { Component } from 'react'
import * as Constants from '../../constants';
import './../../styles/article.scss'
import ArticleElements from './ArticleElements';

export default class ArticleData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            articleData: null,
            error: false,
            errorMessage:""
        }
    }
    componentDidMount() {
        this.getArticle();
    }
    async getArticle() {
        const articleUrl = Constants.articleUrl;
        //Get the article from the provided api when component gets mounted. We can also use third party like axios
        try {
            this.state.loading = true;
            let articleResponse = await fetch(articleUrl,{ method: 'GET' });
            if (articleResponse.ok) {
                //retrieved article data is stored in the Component state
                const articleData = await articleResponse.json();
                this.setState({ articleData: articleData, loading: false });
            } else {
                this.setState({ error: true, errorMessage: "The article data could not be fetched due to an error", loading: false });
            }
        } catch (err) {
            this.setState({ error: true, errorMessage: `There is a server error while fetching article JSON ${err}`, loading: false })
        }

    }


    render() {
        return (
            <>
                {this.state.loading ? "Loading.." :
                    <div className="articleDisplayedContent" id="articleData">
                        <p className='articleName'>{this.state.articleData?.name}</p>
                        <p className='errorMsg' id="error">{this.state.error ? this.state.errorMessage : ''}</p>
                        <ArticleElements elementsToRender={this.state.articleData?.elements} />
                    </div>}
            </>
        )
    }
}

