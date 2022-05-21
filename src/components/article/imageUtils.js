import * as Constants from '../../constants';

export const getImageUrlFromProvidedStructure = (image, renditions)=>{
    console.log(Constants.baseUrl,renditions?.default?.source);
    return Constants.baseUrl + renditions?.default?.source;

}