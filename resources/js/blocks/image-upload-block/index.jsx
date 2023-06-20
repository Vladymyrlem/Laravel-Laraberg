import React from 'react'
import Edit from './edit'
import Save from './save'

const {registerBlockType} = Laraberg

export default () => {
    registerBlockType('test/image-upload-block', {
        title: 'Image Upload Block',
        description: 'This is an Media Upload block',
        category: 'test',
        attributes: {
            media: {
                type: 'object',
                default: {}
            }
        },
        edit: Edit,
        save: Save
    })
}
