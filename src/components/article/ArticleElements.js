import React, { Component } from 'react'
import './../../styles/article.scss';
import { convertDatesToRequiredFormat } from './../utils';
import ArticleBody from './ArticleBody';
import ArticleImages from './ArticleImages';

export default class ArticleElements extends Component {
 constructor(props){
     super(props)
 }

  render() {
    //The article elements obtained will be prepared to render by destructuring them from props
    const {elementsToRender} = this.props;

    let heading = "";
    let author = "";
    let date = "";
    let body = [];
    let mainImgGroup = "";

    if(elementsToRender){
        heading = elementsToRender?.heading?.value;
        author = elementsToRender?.author?.value;
        date = convertDatesToRequiredFormat(new Date(elementsToRender?.date?.value));
        body = elementsToRender.body?.values? elementsToRender.body?.values:[];
        mainImgGroup = elementsToRender?.mainImage?.value?elementsToRender?.mainImage?.value:{};
    }

    return (
       <div className='articleElements'>
           <h3 className="articleHeading">{heading}</h3>
           <div className="articlePublisherDetails">
               <span className="publishedClass">by : </span> 
               <i className='authorName'> {author} </i> on {date}
           </div>
           <ArticleBody body={body}/>
           <ArticleImages imageGroupPassed = {mainImgGroup}/>
       </div>
    )
  }
}
