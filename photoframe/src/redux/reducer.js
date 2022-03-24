import allPhotos from "../data/allPhotos";
const allPhotoReducer = function(state=allPhotos,action){
    console.log(action.index)
    return state
}
export default allPhotoReducer;