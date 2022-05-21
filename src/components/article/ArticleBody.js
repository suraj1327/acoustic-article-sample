import React, { Component } from 'react'
import DOMPurify from 'dompurify';
export default class ArticleBody extends Component {
 constructor(props){
     super(props)
 }


 //Sanitize the HTML for security risks
 sanitizeTheHtmlContent(bodyText){
       return {__html:DOMPurify.sanitize(bodyText)}
 }

    render() {
        return (
            <div>
                {this.props.body.map((bodyText, index) => {
                    return (
                        <div key={index} className="articleBodyContent">
                            <div dangerouslySetInnerHTML={this.sanitizeTheHtmlContent(bodyText)}>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
