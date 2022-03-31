export function removePhoto(index){
    return {
        type: 'REMOVE_PHOTO',
        index: index
    }
}
export function addphoto(photo){
    return {
        type: 'ADD_PHOTO',
        photo
    }
}