/*
In progress, try to make less messy if possible?
Maybe *only* have the if statement in its own component,
not the whole entire thing.
*/

/*

Refer to blog-detail.js

        const contentManager = () => {
            if (this.state.editMode) {
                return <BlogForm
                    handleFeaturedImageDelete={() => this.handleFeaturedImageDelete()}
                    handleUpdateFormSubmission={() => this.handleUpdateFormSubmission()}
                    editMode={this.state.editMode}
                    blogToEdit={this.state.blogItem}
                />
            } else {
                return (
                    <div className='content-container'>
                        <h1 onClick={() => this.handleEditClick()}>{title}</h1>

                        <BlogFeaturedImage img={featured_image_url} />

                        <div className='content'>{ReactHtmlParser(content)}</div>
                    </div>
                )
            }
        }
*/

import React from 'react'
import DropzoneComponent from 'react-dropzone-component'

const CheckIfImage = (
    editMode,
    imageUrl,
    deleteImageFunction,
    imageType,
    refImg,
    configFunction,
    djsConfigFunction,
    imgDropFunction,
    dropzoneText
) => {
    if (editMode && imageUrl) {
        return (
            <div className='edit-mode-image-wrapper'>
                <img src={imageUrl} />

                <div className='image-removal-link'>
                    <a onClick={() => deleteImageFunction(imageType)}>
                        Delete file
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <DropzoneComponent
                ref={refImg}
                config={configFunction()}
                djsConfig={djsConfigFunction()}
                eventHandlers={imgDropFunction()}
            >
                <div className='dz-message'>{dropzoneText}</div>
            </DropzoneComponent>
        )
    }
}

export default CheckIfImage

/*
            <DropzoneComponent
                ref={this.thumbRef}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleThumbDrop()}
            >
                <div className='dz-message'>Thumbnail</div>
            </DropzoneComponent>
*/

/*
{this.state.thumb_image_url && this.state.editMode ? (
    <div className='edit-mode-image-wrapper'>
        <img src={this.state.thumb_image_url} />

        <div className='image-removal-link'>
            <a onClick={() => this.deleteImage('thumb_image')}>
                Delete file
            </a>
        </div>
    </div>
    ) : (
    <DropzoneComponent
        ref={this.thumbRef}
        config={this.componentConfig()}
        djsConfig={this.djsConfig()}
        eventHandlers={this.handleThumbDrop()}
    >
        <div className='dz-message'>Thumbnail</div>
    </DropzoneComponent>
)}*/