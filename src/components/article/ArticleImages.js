import React, { Component } from 'react'
import { prepareImageUrlBasedOnTheScreenSize } from './imageUtils'
import * as Constants from './../../constants'

export default class ArticleImages extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    const { imageGroupPassed } = this.props;
    if (imageGroupPassed) {
      //Responsive Images have been assigned to the srcSet based on the given renditions
      let preparedLeadImageSrcSet = prepareImageUrlBasedOnTheScreenSize(imageGroupPassed?.leadImage);
      let leadImageSource = Constants.baseUrl + imageGroupPassed?.leadImage?.renditions?.default?.source;
      let leadImageAltText = imageGroupPassed?.leadImage?.asset?.altText;
      let leadImageAltTitle = leadImageAltText;
      let leadImageCaption = imageGroupPassed?.leadImage?.leadImageCaption?.value ? imageGroupPassed?.leadImage?.leadImageCaption?.value : '';
      //The credit value is missing in the provided Json so will be displayed empty
      let leadImageCredit = imageGroupPassed?.leadImage?.leadImageCredit?.value ? imageGroupPassed?.leadImage?.leadImageCredit?.value : '';

      return (
        <div className='lead-image-container'>
          <div className='image-display-block'>
            <img src={leadImageSource} srcSet={preparedLeadImageSrcSet} alt={leadImageAltText} title={leadImageAltTitle}></img>
          </div>
          <span className='imageDetails'>
            {leadImageCaption}
          </span>
          <span className='imageDetails'>
            {leadImageCredit}
          </span>
        </div>
      )
    }
  }
}
