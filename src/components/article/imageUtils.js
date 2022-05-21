import * as Constants from '../../constants';

export const prepareImageUrlBasedOnTheScreenSize = (image)=>{
    let renditions = image?.renditions;
    let srcSet = `${Constants.baseUrl + renditions['card']['source']} 800w, 
                  ${Constants.baseUrl + renditions['lead']['source']} 1280w,
                  ${Constants.baseUrl + renditions['default']['source']} 1920w`
  return srcSet;
}