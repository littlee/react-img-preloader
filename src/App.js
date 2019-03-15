import React from 'react'
import PropTypes from 'prop-types'

const isDataURL = imgPath => /data:image\/(jpeg|png);base64/.test(imgPath)

class ImgPreloader extends React.Component {
  state = {
    loaded: 0,
    total: 0 // total in production should not be 0
  }

  imgsRemain = []

  _preloadImgs = () => {
    if (this.imgsRemain.length) {
      this.setState(prev => {
        return {
          loaded: prev.loaded + 1
        }
      })
      let currImg = this.imgsRemain.shift()

      if (isDataURL(currImg)) {
        this._preloadSpecifically()
      } else {
        let img = new Image()
        img.onload = () => {
          this._preloadSpecifically()
        }
        img.src = currImg
      }
    } else {
      this.props.onComplete && this.props.onComplete()
    }
  }

  _preloadSpecifically = () => {
    const { delay } = this.props
    if (delay > 0) {
      setTimeout(this._preloadImgs, this.props.delay)
    } else {
      this._preloadImgs()
    }
  }

  componentDidMount() {
    const { imgs } = this.props
    const length = imgs.length
    this.setState(
      {
        total: length
      },
      () => {
        if (this.state.total === 0) {
          console.warn(
            'Passing empty array to "imgs" in ImgPreloader is not a good idea'
          )
        }
        this.imgsRemain = imgs.slice()
        this._preloadImgs()
      }
    )
  }

  render() {
    return <div> {this.props.children(this.state)} </div>
  }
}

ImgPreloader.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
  onComplete: PropTypes.func
}

ImgPreloader.defaultProps = {
  delay: 0
}

export default ImgPreloader
