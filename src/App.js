var React = require('react')

class ImgsPreloader extends React.Component {
  state = {
    loaded: 0,
    total: 0
  }

  imgsRemain = []

  _preloadImgs = () => {
    if (this.imgsRemain.length) {
      this.setState(prev => {
        return {
          loaded: prev.loaded + 1
        }
      })

      let img = new Image()
      img.onload = () => this._preloadImgs()
      img.src = this.imgsRemain.shift()
    } else {
      this.props.onComplete && this.props.onComplete()
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
        this.imgsRemain = imgs.slice()
        this._preloadImgs()
      }
    )
  }

  render() {
    return <div>{this.props.children(this.state)}</div>
  }
}

module.exports = ImgsPreloader
