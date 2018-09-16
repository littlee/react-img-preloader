import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ImgPreloader from '../src/App'

let imgs = [
  'http://placehold.it/100x100',
  'http://placehold.it/200x200',
  'http://placehold.it/300x300'
]

storiesOf('ImgPreloader', module).add('default', () => (
  <ImgPreloader imgs={imgs} onComplete={action('load complete')} delay={1000}>
    {({ loaded, total }) => <h1>{loaded + '/' + total}</h1>}
  </ImgPreloader>
))
