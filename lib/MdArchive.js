'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdArchive = function MdArchive(props) {
  return _react2.default.createElement(
    _SVG2.default,
    {
      style: props.style,
      className: props.className,
      fill: props.color,
      width: props.fontSize,
      height: props.fontSize,
      viewBox: '0 0 1024 1024',
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('path', { d: 'M907.188 200.002l-64.706-78.598c-11.544-16.15-32.316-25.404-53.154-25.404h-554.658c-20.832 0-41.602 9.254-53.152 25.404l-64.702 78.598c-13.88 13.844-20.816 34.668-20.816 57.77v577.78c0 50.848 41.6 92.448 92.45 92.448h647.106c50.848 0 92.444-41.6 92.444-92.45v-577.78c0-23.1-6.926-43.924-20.812-57.768zM512 766.218l-254.22-254.218h161.78v-92.448h184.886v92.448h161.78l-254.226 254.218zM193.068 188.442l36.972-46.222h554.662l43.93 46.222h-635.564z' })
  );
};

MdArchive.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdArchive.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = MdArchive;
module.exports = exports['default'];
//# sourceMappingURL=MdArchive.js.map