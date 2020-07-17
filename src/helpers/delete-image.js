import axios from 'axios'

const DeleteImage = (imageType, id, isItABlog, axiosThenFunction) => {
    axios.delete(
        isItABlog
            ? (
                `https://api.devcamp.space/portfolio/delete-portfolio-blog-image/${id}?image_type=${imageType}`
            ) : (
                `https://api.devcamp.space/portfolio/delete-portfolio-image/${id}?image_type=${imageType}`
            ),
        { withCredentials: true }
    ).then(response => {
        axiosThenFunction(response)
    }).catch(error => {
        console.log('deleteImage error', error)
    })
}

export default DeleteImage