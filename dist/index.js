var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

var ImgsPreloader = function (_React$Component) {
  _inherits(ImgsPreloader, _React$Component);

  function ImgsPreloader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImgsPreloader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImgsPreloader.__proto__ || Object.getPrototypeOf(ImgsPreloader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loaded: 0,
      total: 0
    }, _this.imgsRemain = [], _this._preloadImgs = function () {
      if (_this.imgsRemain.length) {
        _this.setState(function (prev) {
          return {
            loaded: prev.loaded + 1
          };
        });

        var img = new Image();
        img.onload = function () {
          return _this._preloadImgs();
        };
        img.src = _this.imgsRemain.shift();
      } else {
        _this.props.onComplete && _this.props.onComplete();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImgsPreloader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var imgsArr = this.props.imgsArr;

      var length = imgsArr.length;
      this.setState({
        total: length
      }, function () {
        _this2.imgsRemain = imgsArr.slice();
        _this2._preloadImgs();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.children(this.state)
      );
    }
  }]);

  return ImgsPreloader;
}(React.Component);

module.exports = ImgsPreloader;
