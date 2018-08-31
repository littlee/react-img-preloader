<div align="center">

<h1>React-Img-Preloader</h1>

<p>A Image preloader for React, aims for making image preloading dead-simple and easing the task of showing a running progress bar </p>

</div>

<div align="center">

<h2>Install 💡</h2>

</div>

```bash
npm install react-img-preloader --save-dev
```

<div align="center">

<h2>How To Use 🥊</h2>

</div>

```js
import ImgsPreloader from 'react-img-preloader'

// gather up all images you want for preload in an array
var images = [
  require('/your/path/to/img1'),
  require('/your/path/to/img2'),
  require('/your/path/to/img3'),
  // ... more goes here
]

<ImgsPreloader imgs={images} onComplete={() => {
  console.log('All images are loaded')
}}>
  {
    ({loaded, total}) => <div>imgages planned for preload: {total}; images have been preloaded: {loaded}</div>
	}
</ImgsPreloader>
```
