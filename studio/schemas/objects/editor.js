import React from 'react'

export default {
  title: 'Content Editor',
  name: 'editor',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [
        { title: 'Bullet', value: 'bullet' },
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em'
          }
        ],
      }
    }
  ]
}
