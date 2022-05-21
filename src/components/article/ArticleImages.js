import React, { Component } from 'react'
import { getImageUrlFromProvidedStructure } from './imageUtils'

export default class ArticleImages extends Component {

  constructor(props) {
    super(props)
  }

  fetchDataForCaptionAndCredit(leadImage) {
    const leadImageDetails = {};
    leadImageDetails['caption'] = leadImage?.leadImageCaption?.value ? leadImage?.leadImageCaption?.value : '';
    //The credit value is missing in the provided Json so will be displayed empty
    leadImageDetails['credit'] = leadImage?.leadImageCredit?.value ? leadImage?.leadImageCredit?.value : '';

  }

  render() {
    const { imageGroupPassed } = this.props;
    if (imageGroupPassed) {
      let preparedLeadImageUrl = getImageUrlFromProvidedStructure(imageGroupPassed?.leadImage, imageGroupPassed?.leadImage?.renditions);
      let leadImageAltText = imageGroupPassed?.leadImage?.asset?.altText;
      let leadImageAltTitle = leadImageAltText;
      let leadImageCaptionAndCredit = this.fetchDataForCaptionAndCredit(imageGroupPassed?.leadImage);

      return (
        <div className='lead-image-container'>
          <div className='image-display-block'>
            <img src={preparedLeadImageUrl} alt={leadImageAltText} title={leadImageAltTitle}></img>
          </div>
          <span className='imageDetails'>
            {leadImageCaptionAndCredit}
          </span>
        </div>
      )
    }
  }
}
