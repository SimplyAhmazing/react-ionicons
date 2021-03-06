import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosUmbrella = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M542 129.6c0-0.6 0-1 0-1.6 0-17.6-13.6-32-30-32s-30 14.4-30 32c0 0.4 0 1 0 1.4-216 16-385.6 207.4-385.6 444 0 0.8-0.4 1.6-0.4 2.6h6.4c12.8-46 52.4-79.6 99.2-79.6 46.6 0 86 33.8 99 79.6h9.8c12.8-46 52.8-79.6 99.6-79.6 36.8 0 70 21 88 52.6v299c0 26.4-22 48-48.4 48s-48.2-21.6-48.2-48c0-8.8-7.2-16-16.2-16-8.8 0-16 7.2-16 16 0 44.2 36.4 80 80.4 80s80.4-35.8 80.4-80v-297.6c18-32.4 50.6-54 88-54 46.6 0 85.6 33.8 98.6 79.6h9.8c12.8-46 52.4-80 99.2-80 47 0 86.8 33.8 99.4 80h3.2c-4-233.2-172.2-429.6-386.2-446.4z"></path>
    </SVG>
  )
}


IosUmbrella.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosUmbrella.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosUmbrella
