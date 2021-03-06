import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosArrowRoundForward = props => {
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
      <path d="M272 528h441.4l-132.6 148.8c-5.8 6.8-6.4 16.2-0.2 22.4s17 6.6 22.8 0.2l160-176c0.4-0.4 0.8-0.8 1-1.2 0.2-0.2 0.2-0.4 0.4-0.6s0.4-0.4 0.6-0.8c0.2-0.2 0.2-0.4 0.4-0.6s0.2-0.4 0.4-0.6c0.2-0.2 0.2-0.4 0.4-0.8 0.2-0.2 0.2-0.4 0.4-0.6 0-0.2 0.2-0.4 0.2-0.8 0-0.2 0.2-0.6 0.2-0.8s0.2-0.4 0.2-0.8c0-0.2 0.2-0.6 0.2-0.8s0-0.6 0.2-0.8c0-0.2 0-0.4 0-0.6 0.2-1 0.2-2.2 0-3.2 0-0.2 0-0.4 0-0.6s0-0.6-0.2-0.8c0-0.2-0.2-0.6-0.2-0.8s-0.2-0.4-0.2-0.8c0-0.2-0.2-0.6-0.2-0.8s-0.2-0.4-0.2-0.8c0-0.2-0.2-0.4-0.4-0.6s-0.2-0.4-0.4-0.8c-0.2-0.2-0.2-0.4-0.4-0.6s-0.2-0.4-0.4-0.6c-0.2-0.2-0.4-0.4-0.6-0.8-0.2-0.2-0.2-0.4-0.4-0.6-0.4-0.4-0.6-0.8-1-1.2l-160-176c-3.2-3.4-7.2-4.6-11.4-4.6-4 0-8.2 1.6-11.4 4.6-6.2 6.2-6 16 0 22.6l132.6 148.6h-441.2c-8.8 0-16 7.2-16 16 0 9 7.2 16.2 16 16.2z"></path>
    </SVG>
  )
}


IosArrowRoundForward.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArrowRoundForward.propTypes = {
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


export default IosArrowRoundForward
